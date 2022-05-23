export default function Student({id, name, mark, clicker}) {
  return (
    <p>
      {id}: {name} : {mark}
      <button onClick={()=>clicker(id)}>X</button>
    </p>
  );
}
