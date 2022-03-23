import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  required
} from 'react-admin';

const PostTitle = () => {
  return <span>ユーザ登録</span>;
}

const EditTitle = () => {
  return <span>ユーザ編集</span>;
}

const userFilters = [
  <TextInput source="q" label="Search" alwaysOn />
];

export const UserList = props => (
    <List filters={userFilters} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="名前" />
            <TextField source="username" label="ユーザ名" />
            <EmailField source="email" label="メールアドレス" />
            <TextField source="phone" label="電話番号" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
  <Edit title={<EditTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" validate={required()} label="名前" resettable />
      <TextInput source="username" label="ユーザ名" resettable />
      <TextInput source="email" label="メールアドレス" resettable />
      <TextInput source="phone" label="電話番号" resettable />
    </SimpleForm>
  </Edit>
)

export const UserCreate = props => (
  <Create title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} label="名前" resettable />
        <TextInput source="username" label="ユーザ名" resettable />
        <TextInput source="email" label="メールアドレス" resettable />
        <TextInput source="phone" label="電話番号" resettable />
      </SimpleForm>
  </Create>
)