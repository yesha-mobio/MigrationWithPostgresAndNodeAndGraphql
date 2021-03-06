import { gql } from "apollo-boost";

const getAllUsers = gql`
  query {
    getAllUsers {
      id
      name
      email
      address
      role_id
      roles {
        name
      }
    }
  }
`;

const getUserById = gql`
  query($id: ID!) {
    getUserById(id: $id) {
      id
      name
      email
      address
      password
      role_id
      roles {
        name
      }
    }
  }
`;

const createUser = gql`
  mutation(
    $name: String!
    $email: String!
    $address: String!
    $password: String!
    $role_id: ID!
  ) {
    createUser(
      name: $name
      email: $email
      address: $address
      password: $password
      role_id: $role_id
    ) {
      user {
        id
        name
        email
        address
        roles {
          name
        }
      }
    }
  }
`;

const deleteUser = gql`
  mutation($id: ID!) {
    deleteUser(id: $id) {
      id
      name
      email
      address
      roles {
        name
      }
    }
  }
`;

const updateUser = gql`
  mutation(
    $id: ID!
    $name: String!
    $email: String!
    $address: String!
    $role_id: ID!
  ) {
    updateUser(
      id: $id
      name: $name
      email: $email
      address: $address
      role_id: $role_id
    ) {
      id
      name
      email
      address
      role_id
      roles {
        name
      }
    }
  }
`;

export { getAllUsers, getUserById, createUser, deleteUser, updateUser };
