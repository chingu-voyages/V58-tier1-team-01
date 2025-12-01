import UsersTable from "./UsersTable"
export default function UserTableRow(props) {
    console.log(props);
    return ( 
    <>
     <tr>
      <td>{props.user.timestamp}</td>
      <td>{props.user.gender}</td>
      <td>{props.user.country_name}</td>
      <td>{props.user.timezone}</td>
      <td>{props.user.goal}</td>
      <td>{props.user.source}</td>
      <td>{props.user.solo_project_tier}</td>
      <td>{props.user.role_type}</td>
      <td>{props.user.voyage_role}</td>
      <td>{props.user.voyage}</td>
      <td>{props.user.voyage_tier}</td>
    </tr>  
    

    </>
    )
};
  
