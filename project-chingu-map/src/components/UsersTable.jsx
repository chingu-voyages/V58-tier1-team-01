   
   import UserTableRow from "./UserTableRow";
   const users = [
 {
            timestamp: "11/23/2025 @ 4:22am",
            gender: "Female",
            country_code: "CA",
            country_name: "Canada",
            timezone: "MST",
            goal: "Learn React",
            goal_other: "Further my skills",
            source: "Referral",
            source_other: "From a friend",
            solo_project_tier: "Tier 1",
            role_type: "Developer",
            voyage_role: "Frontend",
            voyage: "Voyage 58",
            voyage_tier: "Tier 1",
        },
        {

            timestamp: "11/23/2025 @ 4:22am",
            gender: "Female",
            country_code: "CA",
            country_name: "Canada",
            timezone: "MST",
            goal: "Learn React",
            goal_other: "Further my skills",
            source: "Referral",
            source_other: "From a friend",
            solo_project_tier: "Tier 1",
            role_type: "Developer",
            voyage_role: "Frontend",
            voyage: "Voyage 58",
            voyage_tier: "Tier 1",
        },
                {

            timestamp: "11/23/2025 @ 4:22am",
            gender: "Female",
            country_code: "CA",
            country_name: "Canada",
            timezone: "MST",
            goal: "Learn React",
            goal_other: "Further my skills",
            source: "Referral",
            source_other: "From a friend",
            solo_project_tier: "Tier 1",
            role_type: "Developer",
            voyage_role: "Frontend",
            voyage: "Voyage 58",
            voyage_tier: "Tier 1",
        },

    ];  
export default function UsersTable() {   
      const userRows = users.map((user, index) => (
        <UserTableRow key={index} user={user} />
      ));   
    return (
    <>
        <div className="table-container">Users Table Component</div>
        <table className="table">
  <thead>
    <tr>
      <th>User Time</th>
      <th>Gender</th>
     <th>Country</th>
       <th>Timezone</th>
      <th>Goal</th>
      <th>Source</th>
      <th>Solo Project Tier</th>
      <th>Role Type</th>
      <th>Voyage Role</th>
      <th>Voyage</th>
      <th>Voyage Tier</th>
    </tr>
  </thead>
  <tbody>
   {userRows}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="11"></td>
    </tr>
  </tfoot>
</table>

    </>
     )
}