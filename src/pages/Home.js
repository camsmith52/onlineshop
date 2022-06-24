import React, {  useContext } from "react";
import { GlobalState } from "../App";
import laptop from "../Images/laptop.jpg";
import cellphone from "../Images/cellphone.jpg";
import watch from "../Images/watch.jpg";
import ipad from "../Images/ipad.jpg";
import macbook from "../Images/macbook.jpg";
import gopro from "../Images/gopro.jpg";
import { NavLink } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Laptop",
    price: "100",
    description: "Sleek tech with the latest features",
    qty: 1,
    image: <img alt="laptop" src={laptop} width="200" height="200" />,
  },
  {
    id: 2,
    title: "Cellphone",
    price: "150",
    description: "Sleek tech with the latest features",
    qty: 1,
    image: <img alt="cellphone" src={cellphone} width="200" height="200" />,
  },
  {
    id: 3,
    title: "Watch",
    price: "100",
    description: "Sleek tech with the latest features",
    qty: 1,
    image: <img alt="watch" src={watch} width="200" height="200" />,
  },
  {
    id: 4,
    title: "ipad",
    price: "100",
    description: "Sleek tech with the latest features",
    qty: 1,
    image: <img alt="ipad" src={ipad} width="200" height="200" />,
  },
  {
    id: 5,
    title: "gopro",
    price: "190",
    description: "Sleek tech with the latest features",
    qty: 1,
    image: <img alt="gopro" src={gopro} width="200" height="200" />,
  },
  {
    id: 6,
    title: "Macbook",
    price: "100",
    description: "Sleek tech with the latest features",
    qty: 1,
    image: <img alt="computer" src={macbook} width="200" height="200" />,
  },
];

const Home = () => {
  //State
  const [itemsInBasket, setItemsInBasket, search, setSearch] =
    useContext(GlobalState);

  // const [DUMMY_DATA, setDUMMY_DATA] = useState([]);
  // useEffect(()=>{
  //    const response = async () =>
  //     () => {
  //        const { res } = axios
  //          .get("https://fakestoreapi.com/products")
  //          .then((res) => res.json())
  //          .then((json) => console.log(json));
  //        setDUMMY_DATA(res.data);

  //      };
  //      response();
  // },[])

  //Helper function
  const itemAddedToBasket = (itemBeingAdded) => {
    // e.stopPropagation()

    if (itemsInBasket.indexOf(itemBeingAdded) !== -1) {
      //checks if the item is already in the item basket
      itemBeingAdded.qty += 1;
    } else {
      setItemsInBasket([...itemsInBasket, itemBeingAdded]);
    }
  };
  console.log(DUMMY_DATA);
  //Displayed items
  //checks if user is searching. Filter if they are, don't filter if they aren't.
  const items = DUMMY_DATA.filter((item) =>
    search ? item.title.toLowerCase().includes(search.toLowerCase()) : item
  ).map((item) => {
    return (
      <div key={item.id} className="column">
        <NavLink
          to={{
            pathname: `/${item.title}/${item.id}`,
            itemProps: { item, itemAddedToBasket }, //these props are passed through this Navlink using useLocation
          }}
        >
          <div className="ui segment">
            {item.title}
            <div></div>
            {item.image}
            <div>
              <p>Price:${item.price}</p>
            </div>
          </div>
        </NavLink>
        <button
          className="ui button right"
          onClick={() => itemAddedToBasket(item)}
        >
          Add to cart
        </button>
      </div>
    );
  });

  //SearchBar
  const searchBar = (
    <div className="ui menu">
      <div className="ui category search item">
        <div className="ui transparent icon input">
          <input
            className="prompt"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="search link icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </div>
  );

  //JSX
  return (
    <div>
      {searchBar}
      <div className="ui four column grid">{items}</div>
    </div>
  );
};

export default Home;
