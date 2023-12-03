// ton tableau d'objets pour les 2 pages

// commencer sur la ligne 257, ensuite
// voir des lignes 93 à 140 
const data = [
  {
      id: 1,
      name: "T shirt-tête de mort",
      img: "asset/hommes-tetedemort.png",
      price: 15,
      cat: "Collection Hommes",
  },
  {
      id: 2,
      name: "T shirt-papillon",
      img: "asset/femmes-papillon.png",
      price: 25,
      cat: "Collection Femmes",
  },
  {
      id: 3,
      name: "T shirt neko kawaii",
      img: "asset/staykawaii-neko-kawaii.png",
      price: 25,
      cat: "Collection Stay Kawaii",
  },
  {
      id: 4,
      name: "T shirt graffiti",
      img: "asset/streetwear-graffiti.png",
      price: 5,
      cat: "Collection Street wear",
  },
  {
      id: 5,
      name: "T shirt DBZ",
      img: "asset/geek-mangas-dbz.png",
      price: 10,
      cat: "Collection Geek-Mangas",
  },
  {
      id: 6,
      name: "T shirt Attack on Titan",
      img: "asset/geek-mangas-attackontitan.png",
      price: 25,
      cat: "Collection Geek-Mangas",
  },
  {
      id: 7,
      name: "T shirt Demon Slayer",
      img: "asset/geek-mangas-1.png",
      price: 25,
      cat: "Collection Geek-Mangas",
  },
  {
      id: 8,
      name: "T shirt Art Graphique",
      img: "asset/streetwear-art-graphique.png",
      price: 25,
      cat: "Collection Street wear",
  },
  {
      id: 9,
      name: "T shirt Les Super Nana",
      img: "asset/femmes-super-nana.png",
      price: 25,
      cat: "Collection Femmes",
  },
  {
      id: 10,
      name: "T shirt Tokyo",
      img: "asset/hommes-tokyo.png ",
      price: 25,
      cat: "Collection Hommes",
  },
  {
      id: 11,
      name: "T Shirt Spider",
      img: "asset/hommes-spider.png",
      price: 25,
      cat: "Collection Hommes",
  },
  {
      id: 12,
      name: "T shirt animal mignon",
      img: "asset/staykawaii-animal-kawaii.png",
      price: 25,
      cat: "Collection Stay Kawaii",
  },
];



// ici condition qu'il y ai un élément html avec un id 'detail' que j'ai mis
// sur le main dans détail
if (document.getElementById('detail')!==null){
// si on entre ici c'est qu'on est dans detail.html
  let detailContent="";
  let container=document.getElementById('detail');

  // je récupère l'id envoyé dans l'url en découpant grace à la méthode split selon un séparateur qui est ici '='.
  // cette méthode si elle trouve le séparateur en question va couper la
  // chaine de l'url en 2 chaines dans un tableau
  
  // voilà mon url:
  // http://localhost:63342/mirushop/detail.html?id=3
  //je récupère donc en console.log [ 'http://localhost:63342/mirushop/detail.html?id', '3'] 
  // au final, window.location.href renvoi l'url, .split permet d'exploser la chaine de caractère en 2 chaines dans un tableau. indice 0=> renvoi ce qu'il y a avant le = et indice 1=> renvoie la valeur de l'id transité
  let id=window.location.href.split('=')[1]


  // je boucle sur tes produit 
  data.forEach(function (product) {
    // si l'id d'un de tes produit correspond à l'id récupéré et converti en number grâce à parseInt()
    // alors c'est bien lui et je peux construire l'html
    if (product.id === parseInt(id)) {
        detailContent += `
        
        <!-- product text -->
        <div class="product-text">
            <!-- category -->
            <span class="product-category">${product.cat}</span>
            <!-- title -->
            <h3>${product.name}</h3>
            <!-- Price -->
            <span class="product-price">${product.price} €</span>
            <!-- details -->
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque animi sint aspernatur possimus esse commodi nesciunt quia, ullam excepturi, blanditiis et! Maxime ratione debitis asperiores eius provident obcaecati fuga doloribus.</p>
            <!-- size container -->
            <div class="product-size-container">
                <strong>Selection Tailles</strong>
                <!-- size -->
                <div class="product-size"></div>
                <!-- XL -->
                <input type="checkbox" class="s-checkbox" id="s-xl">
                <label for="s-xl" class="s-label">XL</label>
                <!-- small -->
                <input type="checkbox" class="s-checkbox" id="s-s">
                <label for="s-s" class="s-label">S</label>
                <!-- medium -->
                <input type="checkbox" class="s-checkbox" id="s-m">
                <label for="s-m" class="s-label">M</label>
                <!-- large -->
                <input type="checkbox" class="s-checkbox" id="s-l">
                <label for="s-l" class="s-label">L</label>
                <!-- product buttons -->
                <div class="product-buttons">
                    <a href="#" class="add-bag-btn">Add To Bag</a>
                    <a href="#" class="add-wishlist-btn">Add To Wishlist</a>
                </div>
                <!-- help-btn -->
                <a href="#" class="help-btn">Need Any help?</a>
            </div>

            <!-- Display dynamic content based on the product -->
            <div class="product">
                <img src="${product.img}" alt="">
              </div>
        </div>`;
        
    }
    
});


  container.innerHTML += detailContent;






}else{
// js pour la page collection.html
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  console.log(hamburger.classList)
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
  });
});


// Catalogue de produit

// Variables ==================================================
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

// Display all products =======================================
const displayProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
      .map(
          (product) =>
              `
        <div class="product" id="${product.id}">
          <img
          src=${product.img}
          alt=""
          />
          <span class="name">${product.name}</span>
          <span class="priceText">Prix: ${product.price} €</span>
        </div>
       
    `
      )
      .join("");
};
displayProducts(data);

// Add event listener for search input ===========================
searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
      displayProducts(
          data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
  } else {
      displayProducts(data);
  }
});

// Set Categories =================================================
const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
      "All",
      ...allCats.filter((item, i) => {
          return allCats.indexOf(item) === i;
      }),
  ];

  categoriesContainer.innerHTML = categories
      .map(
          (cat) =>
              `
      <span class="cat">${cat}</span>
    `
      )
      .join("");

  // Event listener for category ===================================
  categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;

      selectedCat === "All"
          ? displayProducts(data)
          : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

// Search by price range =========================================
const setPrices = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = maxPrice + "€";

  // Price range event listener =====================================
  priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "€" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrices();







function displayDetail(e) {
  // e.target renvoi l'élément qui a reçu l'évènement
  // si l'élément contient la classe 'product' alors il s'agit d'un de tes produits
  // donc on peut boucler sur tes produit afin de comparer leurs id avec l'id de l'élément (on a fait en sorte que leur
  // id corresponde dans ta méthode displayProducts)
  if (e.target.classList.contains('product')) {
      data.forEach(function (product) {
          if (product.id === parseInt(e.target.id)) {
              // si ça correspond, on redirige avec l'id concaténé. fait attention à l'url, toi et moi n'avons pas le même
              window.location.href="http://127.0.0.1:5500/detail-produit.html?id="+product.id;

          }

      });

  }
}

// je créé un evenement click qui va écouter tout les clics des enfants du bloc de class 'products' récupéré dans la variable productsContainer. L'évènement appel la fonction juste au dessus
  productsContainer.addEventListener('click', displayDetail);


}// fin else
