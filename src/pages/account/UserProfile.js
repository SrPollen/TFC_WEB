const Profile = ({ user }) => {
  console.log("dd " +  user.name);
  return (
    <div className="account-container">
      <div className="account glow">
        <div className="wrapper">
          <div className="image-container">
            <img className="glow" src="/images/user.png" alt="user-image" />
          </div>
          <div className="content-right">
            <div>{user.username}</div>
            <div>{user.name} {user.lastname}</div>
            <div>{user.email}</div>
          </div>
        </div>
        <div className="content">
          <div>Oleada máxima alcanzada: {user.maxWave}</div>
          <div>Tiempo de juego: {user.playtime}</div>
          <div>Partidas jugadas: {user.games}</div>
          <div>Max. enemigos eliminados: {user.maxKills}</div>
          <div>Total de enemigos eliminados: {user.kills}</div>
          <div>Daño inflinjido: {user.damage}</div>
          <div>Oleada maxima alcanzada: {user.maxDamage}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
