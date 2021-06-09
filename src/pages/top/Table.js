import MaterialTable from "material-table";

const columns = [
  { title: 'POSICIÓN', render:(rowData)=>rowData.tableData.id+1 },
  { title: "USUARIO", field: "username" },
  { title: "TOTAL ELIMINADOS", field: "kills" },
  { title: "MAX. ELIMINADOS", field: "maxKills" },
  { title: "DAÑO TOTAL", field: "damage" },
  { title: "MAX. DAÑO", field: "maxDamage" },
  { title: "PARTIDAS", field: "games" },
];


const Table = ({ users }) => {
  return (
    <MaterialTable title="TOP JUGADORES" data={users} columns={columns}/>
  );
};

export default Table;
//{users.map((user) => ())}
