const Profile = ({ user }) => {
  console.log("dd " +  user.name);
  return (
    <div className="account-container">
      <div className="account glow">
        <div className="wrapper">
          <div className="image-container">
            <img className="glow" src="/images/user.png" alt="user" />
          </div>
          <div className="content-right">
              <div className="data-user">
              <div className="username">{user.username}</div>
              <div className="name">{user.name} {user.lastname}</div>
              <div className="email">{user.email}</div>
            </div>
          </div>
        </div>
        
        <div className="content">
          <div className="user-title">DATOS DE FIREWAVE</div>
          <div className="data">
            <div><span className="user-label">Oleada máxima alcanzada:</span> {user.maxWave}</div>
            <div><span className="user-label">Tiempo de juego: </span>{parseFloat(user.playtime).toFixed(2)} h</div>
            <div><span className="user-label">Partidas jugadas: </span>{user.games}</div>
            <div><span className="user-label">Max. enemigos eliminados: </span>{user.maxKills}</div>
            <div><span className="user-label">Total de enemigos eliminados: </span>{user.kills}</div>
            <div><span className="user-label">Daño inflinjido: </span>{user.damage}</div>
            <div><span className="user-label">Max. daño inflinjido: </span>{user.maxDamage}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
