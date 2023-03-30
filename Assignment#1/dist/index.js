"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fetch("https://dummyjson.com/products")
                .then((res) => res.json())
                .then((res) => resolve(res.products))
                .catch((err) => reject(err));
        });
    });
}
let render = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData();
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
    let container = document.getElementById("product-table");
    container.innerHTML = html;
});
render();
//# sourceMappingURL=index.js.map