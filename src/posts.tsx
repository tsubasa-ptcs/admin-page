import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const PostTitle = () => {
    return <span>投稿登録</span>;
}

const EditTitle = ({ record }) => {
    return <span>タイトル {record ? `"${record.title}"` : ''}</span>;
}

const postFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const PostList = props => (
    <List filters={postFilters} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users" label="名前">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" label="タイトル" />
            <TextField source="body" label="本文" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<EditTitle record={undefined} />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users" label="名前">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" label="タイトル" />
            <TextInput multiline source="body" label="本文" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create title={<PostTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" label="名前">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" label="タイトル" />
            <TextInput multiline source="body" label="本文" />
        </SimpleForm>
    </Create>
)