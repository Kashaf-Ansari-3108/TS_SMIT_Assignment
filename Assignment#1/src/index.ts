type Data = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
};
async function getData(): Promise<Data[]> {
  return new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => resolve(res.products))
      .catch((err) => reject(err));
  });
}

let render = async () => {
  const data: Data[] = await getData();
  console.log(data);

  let html = `<tr id="heading">
  <th>ID</th>
  <th>Title</th>
  <th>Description</th>
  <th>Brand</th>
  <th>Category</th>
</tr>`;
  for (let i = 0; i < data.length; i++) {
    let htmlSegment = `<tr><td>${data[i].id}</td>
    <td>${data[i].title}</td>
    <td>${data[i].description}</td>
    <td>${data[i].brand}</td>
    <td>${data[i].category}</td></tr>`;

    html += htmlSegment;
  }
  let container = document.getElementById("product-table")!;
  container.innerHTML = html;
};
render();
