// Hamburger Menu
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
const data = [
    {
      id: 1,
      name: "T shirt-tête de mort",
      img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
      price: 15,
      cat: "Collection Hommes",
    },
    {
      id: 2,
      name: "T shirt-papillon",
      img: "https://i.ibb.co/LzyJbZ1/black-hoddie.png",
      price: 25,
      cat: "Collection Femmes",
    },
    {
      id: 3,
      name: "T shirt neko kawaii",
      img: "https://i.ibb.co/LzyJbZ1/black-hoddie.png",
      price: 25,
      cat: "Collection Stay Kawaii",
    },
    {
      id: 4,
      name: "T shirt graffiti",
      img: "https://i.ibb.co/LzyJbZ1/black-hoddie.png",
      price: 5,
      cat: "Collection Street wear",
    },
    {
      id: 5,
      name: "T shirt DBZ",
      img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
      price: 10,
      cat: "Collection Geek-Mangas",
    },
    {
      id: 6,
      name: "T shirt Attack on Titan",
      img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
      price: 25,
      cat: "Collection Geek-Mangas",
    },
    {
      id: 7,
      name: "T shirt Sailor Moon",
      img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
      price: 25,
      cat: "Collection Geek-Mangas",
    },
    {
      id: 8,
      name: "T shirt Art Graphique",
      img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
      price: 25,
      cat: "Collection Street wear",
    },
    {
      id: 9,
      name: "T shirt Les Super Nana",
      img: "https://i.ibb.co/HKy2PJS/girls-red-hoddie.png",
      price: 25,
      cat: "Collection Femmes",
    },
    {
      id: 10,
      name: "T shirt Tokyo",
      img: "https://i.ibb.co/FWSNCGK/t-shirt.png",
      price: 25,
      cat: "Collection Hommes",
    },
    {
      id: 11,
      name: "T Shirt Spider",
      img: "https://i.ibb.co/FWSNCGK/t-shirt.png",
      price: 25,
      cat: "Collection Hommes",
    },
    {
        id: 12,
        name: "T shirt animal mignon",
        img: "https://i.ibb.co/FWSNCGK/t-shirt.png",
        price: 25,
        cat: "Collection Stay Kawaii",
      },
  ];
  
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
          <div class="product">
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
  