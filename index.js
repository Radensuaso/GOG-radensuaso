//Array of games
const games = [
  {
    gameName: "Soul Saga",
    discountPercentage: 0,
    price: 14.99,
    image: "./assets/tile (1).jpg",
  },
  {
    gameName: "RollerCoaster Tycoon: Deluxe",
    discountPercentage: 0,
    price: 4.99,
    image: "./assets/tile (2).jpg",
  },
  {
    gameName: "Smart City Plan",
    discountPercentage: 40,
    price: 13.29,
    image: "./assets/tile (3).jpg",
  },
  {
    gameName: "Disco Elysium - The Final Cut",
    discountPercentage: 35,
    price: 39.99,
    image: "./assets/tile (4).jpg",
  },
  {
    gameName: "Baldur's Gate II: Enhanced Edition",
    discountPercentage: 50,
    price: 16.49,
    image: "./assets/tile (5).jpg",
  },
  {
    gameName: "Armed and Dangerous",
    discountPercentage: 64,
    price: 4.99,
    image: "./assets/tile (6).jpg",
  },
  {
    gameName: "Dark Quest 1 & 2",
    discountPercentage: 75,
    price: 9.99,
    image: "./assets/tile (7).jpg",
  },
  {
    gameName: "Wolfenstein II: The New Colossus Digital Deluxe Edition",
    discountPercentage: 67,
    price: 59.99,
    image: "./assets/tile (8).jpg",
  },
  {
    gameName: "Deponia",
    discountPercentage: 90,
    price: 9.99,
    image: "./assets/tile (9).jpg",
  },
  {
    gameName: "Darkest Hour: A Hearts of Iron Game",
    discountPercentage: 75,
    price: 8.29,
    image: "./assets/tile (10).jpg",
  },
  {
    gameName: "STAR WARS™: Rogue Squadron 3D",
    discountPercentage: 65,
    price: 8.29,
    image: "./assets/tile (11).jpg",
  },
  {
    gameName: "Beat Cop",
    discountPercentage: 80,
    price: 13.99,
    image: "./assets/tile (12).jpg",
  },
  {
    gameName: "The Escapists: The Walking Dead",
    discountPercentage: 75,
    price: 14.99,
    image: "./assets/tile (13).jpg",
  },
  {
    gameName: "Dishonored: Complete Collection",
    discountPercentage: 50,
    price: 69.99,
    image: "./assets/tile (14).jpg",
  },
  {
    gameName: "Myst IV: Revelation",
    discountPercentage: 60,
    price: 12.49,
    image: "./assets/tile (15).jpg",
  },
  {
    gameName: "The Surge 2 - The Kraken Expansion",
    discountPercentage: 33,
    price: 6.69,
    image: "./assets/tile (16).jpg",
  },
  {
    gameName: "Urtuk: The Desolation",
    discountPercentage: 0,
    price: 18.99,
    image: "./assets/tile (17).jpg",
  },
  {
    gameName: "RimWorld",
    discountPercentage: 10,
    price: 29.99,
    image: "./assets/tile (18).jpg",
  },
  {
    gameName: "Heroes of Might and Magic® 3: Complete",
    discountPercentage: 75,
    price: 9.99,
    image: "./assets/tile (19).jpg",
  },
  {
    gameName: "Murder by Numbers Collector’s Edition",
    discountPercentage: 50,
    price: 18.39,
    image: "./assets/tile (20).jpg",
  },
  {
    gameName: "Wolfenstein 3D + Spear of Destiny",
    discountPercentage: 50,
    price: 7.99,
    image: "./assets/tile (21).jpg",
  },
  {
    gameName: "Europa Universalis III Complete",
    discountPercentage: 75,
    price: 12.39,
    image: "./assets/tile (22).jpg",
  },
  {
    gameName: "Bug Fables: The Everlasting Sapling",
    discountPercentage: 40,
    price: 16.79,
    image: "./assets/tile (23).jpg",
  },
  {
    gameName: "Blade Runner",
    discountPercentage: 34,
    price: 8.29,
    image: "./assets/tile (24).jpg",
  },
  {
    gameName: "Warcraft I & II Bundle",
    discountPercentage: 15,
    price: 12.39,
    image: "./assets/tile (25).jpg",
  },
  {
    gameName: "The Age of Decadence",
    discountPercentage: 75,
    price: 10.79,
    image: "./assets/tile (26).jpg",
  },
  {
    gameName: "Littlewood",
    discountPercentage: 0,
    price: 12.49,
    image: "./assets/tile (27).jpg",
  },
]

window.onload = function () {
  generateHighlight()
}

// function to generate game cards
function generateGameCard(gamesIndex) {
  const gameCard = document.createElement("div")
  gameCard.classList.add("game-card", "card", "border-0")
  if (games[gamesIndex].discountPercentage === 0) {
    gameCard.innerHTML = `<img
      src="${games[gamesIndex].image}"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${games[gamesIndex].gameName}</h5>
      <div class="d-flex">
        <i class="operating-system fab fa-windows"></i>
        <div class="discount d-flex">
          <div class="price">
            <br /><span class="price-now">${games[gamesIndex].price}€</span>
          </div>
        </div>
      </div>
    </div>`
  } else {
    gameCard.innerHTML = `<img
    src="${games[gamesIndex].image}"
    class="card-img-top img-fluid"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${games[gamesIndex].gameName}</h5>
    <div class="d-flex">
      <i class="operating-system fab fa-windows"></i>
      <div class="discount d-flex">
        <div class="percentage mx-2">-${
          games[gamesIndex].discountPercentage
        }%</div>
        <div class="price">
          <span class="crossed-price">${games[gamesIndex].price}€</span>
          <br /><span class="price-now">${(
            games[gamesIndex].price -
            (games[gamesIndex].price * games[gamesIndex].discountPercentage) /
              100
          ).toFixed(2)}€</span>
        </div>
      </div>
    </div>
  </div>`
  }

  return gameCard
}

// function to generate cards in the highlight row

function generateHighlight() {
  // get the row
  const highlightsRow = document.querySelector("div.highlights > div.row")
  // for loop to create 4 cols
  for (let i = 0; i < 4; i++) {
    const col = document.createElement("div")
    col.classList.add("col-12", "col-sm-6", "col-md-3", "mb-3")
    col.appendChild(generateGameCard(i))
    highlightsRow.appendChild(col)
  }
}
