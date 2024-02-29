import PropTypes from 'prop-types'

function List(props){

    const category = props.category;
    const itemList = props.items;


    const listItems = itemList.map(item => <li key={item.id} >{item.name}: &nbsp;
    <b>{item.calories}</b>
    </li>)

    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
List.defaultProps = {
    category: "Category",
    items: []
}

export default List

   // fruits.sort((a,b) => a.name.localeCompare(b.name))//a => b reverse alphabetical
  //  fruits.sort((a,b) => a.calories - b.calories) // b=>a

   // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
 //   const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);