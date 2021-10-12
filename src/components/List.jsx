const List = ({ list }) => {
  return (
    <ol>
      {list.map((item) => (
        <li>
          {item.id}. {item.title}
        </li>
      ))}
    </ol>
  );
};

export default List;
