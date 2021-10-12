const List = ({ lists }) => {
  return (
    <ol>
      {lists.map((list) => (
        <li key={list.id}>
          {list.id}. {list.title}
        </li>
      ))}
    </ol>
  );
};

export default List;
