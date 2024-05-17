import axios from "axios";
const books = async () => {
  const { data } = await axios.get(
    "http://openlibrary.org/search.json?author=tolkien"
  );
  return data;
};

const favorites = async () => {
  let config = {
    method: "get",
    url: "http://localhost:8081/favoriteBooks",
    headers: {
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMzRhZDAzMTczMzg2MmI4ODRhNTUiLCJlbWFpbCI6ImFuaW1AZ21haWwuY29tIiwiaWF0IjoxNjUwNjAzODQxfQ.w3YOJPCix2Aff_F8n8a-zWPKm9lYbKiuzSkL29p-z0A",
    },
  };
  // const { data } = await axios.get('http://localhost:5000/favoriteBooks', config);
  const { data } = await axios(config);
  return data;
};
const getUser = async (email) => {
  const { data } = await axios.get(`http://localhost:8082/user/${email}`);
  console.log("Data is", JSON.stringify(data));
  return data;
};
const loginuser = async ({ email, password }) => {
  console.log("inside api", email, password);
  const data = await axios.post(`http://localhost:8082/auth/login`, {
    email,
    password,
  });
  return data;
  //console.log("Data is", data);
};
const addUser = async (data) => {
  const { data1 } = await axios.post("http://localhost:8082/user/create", data);
};
const addfavorite = async (data) => {
  let config = {
    method: "post",
    url: "http://localhost:8081/favoriteBooks",
    headers: {
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMzRhZDAzMTczMzg2MmI4ODRhNTUiLCJlbWFpbCI6ImFuaW1AZ21haWwuY29tIiwiaWF0IjoxNjUwNjAzODQxfQ.w3YOJPCix2Aff_F8n8a-zWPKm9lYbKiuzSkL29p-z0A",
    },
    data: data,
  };
  await axios(config);
};
const removeFavorite = async (data) => {
  console.log(data);
  let config = {
    method: "delete",
    url: `http://localhost:8081/favoriteBooks/${data.key}`,
    headers: {
      authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMzRhZDAzMTczMzg2MmI4ODRhNTUiLCJlbWFpbCI6ImFuaW1AZ21haWwuY29tIiwiaWF0IjoxNjUwNjAzODQxfQ.w3YOJPCix2Aff_F8n8a-zWPKm9lYbKiuzSkL29p-z0A",
    },
  };
  return await axios(config);
};

const searchBooks = async (seachByData) => {
  let { searchBy, searchText } = seachByData;
  if (searchBy == "author") {
    let url = "http://openlibrary.org/search.json?author=" + searchBy;
    const { data } = await axios.get(url);
    console.log("data", data);
    return { data: data.docs };
  } else if (searchBy == "title") {
    let title = searchText.split(" ").join("+");
    let url = "http://openlibrary.org/search.json?title=" + title;
    const { data } = await axios.get(url);
    return { data: data.docs };
  }
};
// eslint-disable-next-line import/no-anonymous-default-export

/*const getauthor = async id => {
    const  {data}  = await axios.get(`http://localhost:5000/authors/${id}`);
    console.log("Data is", JSON.stringify(data));
    return data;
}
const editauthor = async (id, name) => {
   const  {data}  = await axios.put(`http://localhost:5000/authors/edit/${id}`,{name});
    return data;
    //console.log("Data is", data);
}

const deleteauthor = async (id) => {
    const  data = await axios.delete(`http://localhost:5000/authors/delete/${id}`);
    return data;
    //console.log("Data is", data);
}*/
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  books,
  addfavorite,
  favorites,
  loginuser,
  addUser,
  getUser,
  removeFavorite,
  searchBooks,
};
