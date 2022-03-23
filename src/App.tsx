import React from 'react'
import { Admin, fetchUtils, Resource } from 'react-admin'
import { PostList, PostEdit, PostCreate } from './posts'
import { UserList, UserCreate, UserEdit } from './users'
import jsonServerProvider from 'ra-data-json-server'
import PostIcon from '@material-ui/icons/Book'
import UserIcon from '@material-ui/icons/Group'
import authProvider from './authProvider'

const dataProvider = jsonServerProvider('http://localhost:3000')

const App = () =>  (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon} options={{ label: "ユーザ一覧" }} />
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} options={{ label: "投稿一覧" }} />
  </Admin>
);

export default App