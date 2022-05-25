const season = ["spring", "summer", "fall", "winter"]
const cardList = [
        {
        key:1,
        title : "Peony",
        content : "The peony or paeony is a flowering plant in the genus Paeonia, the only genus in the family Paeoniaceae. Peonies are native to Asia, Europe and Western North America. Scientists differ on the number of species that can be distinguished, ranging from 25 to 40, although the current consensus is 33 known species. The relationships between the species need to be further clarified. Most are herbaceous perennial plants 0.25–1 metre (1–3 ft) tall, but some are woody shrubs 0.25–3.5 metres (1–11 ft) tall. They have compound, deeply lobed leaves and large, often fragrant flowers, in colors ranging from purple and pink to red, white or yellow, in late spring and early summer. The flowers have a short blooming season, usually only 7–10 days. Peonies are popular garden plants in temperate regions.",
        img:"https://images.pexels.com/photos/5199144/pexels-photo-5199144.jpeg?cs=srgb&dl=pexels-tamara-velazquez-5199144.jpg&fm=jpg"
        },
        {
        key:2,
        title : "Rose",
        content : "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars.[citation needed] They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.[citation needed] Their flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.[citation needed] Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant. Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height.",
        img:"https://images.pexels.com/photos/6479576/pexels-photo-6479576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
        key:3,
        title : "Tulip",
        content : "Tulips (Tulipa) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes (having bulbs as storage organs). The flowers are usually large, showy and brightly coloured, generally red, pink, yellow, or white (usually in warm colours). They often have a different coloured blotch at the base of the tepals (petals and sepals, collectively), internally. Because of a degree of variability within the populations, and a long history of cultivation, classification has been complex and controversial. The tulip is a member of the lily family, Liliaceae, along with 14 other genera, where it is most closely related to Amana, Erythronium and Gagea in the tribe Lilieae.",
        img:"https://images.pexels.com/photos/6625758/pexels-photo-6625758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
        key:4,
        title : "Daisy",
        content : "Daisy is a European species of the family Asteraceae, often considered the archetypal species of the name daisy. To distinguish this species from other plants known as daisies, it is sometimes qualified as common daisy, lawn daisy or English daisy. Historically, it has also been widely known as bruisewort, and occasionally woundwort (although the common name 'woundwort' is now more closely associated with the genus Stachys).Bellis perennis is native to western, central and northern Europe, including remote islands such as the Faroe Islands, but has become widely naturalised in most temperate regions, including the Americas and Australasia.",
        img:"https://images.pexels.com/photos/5302624/pexels-photo-5302624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
        key:5,
        title : "Ranunculus",
        content : "'Buttercup' redirects here. For the variety of squash, see Buttercup squash. For other uses, see Buttercup (disambiguation). Ranunculus /ræˈnʌŋkjʊləs/[1] is a large genus of about 600 species[2]: 276 [3] of flowering plants in the family Ranunculaceae. Members of the genus are known as buttercups, spearworts and water crowfoots. The familiar and widespread buttercup of gardens throughout Northern Europe (and introduced elsewhere) is the creeping buttercup Ranunculus repens, which has extremely tough and tenacious roots. Two other species are also widespread, the bulbous buttercup Ranunculus bulbosus and the much taller meadow buttercup Ranunculus acris. In ornamental gardens, all three are often regarded as weeds.",
        img:"https://images.pexels.com/photos/2317916/pexels-photo-2317916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
        key:6,
        title : "Hydrangeahydrangeahydrangeahydrangea ",
        content : "Several terms redirect here. For other uses, see Hydrangea (disambiguation) and Hortensia (disambiguation). Hydrangea (/haɪˈdreɪndʒiə/) common names hydrangea or hortensia, is a genus of over 75 species of flowering plants native to Asia and the Americas. By far the greatest species diversity is in eastern Asia, notably China, Korea, and Japan. Most are shrubs 1–3 m (3 ft 3 in – 9 ft 10 in) tall, but some are small trees, and others lianas reaching up to 30 m (100 ft) by climbing up trees. They can be either deciduous or evergreen, though the widely cultivated temperate species are all deciduous. Hydrangea is derived from Greek and means ‘water vessel’ (from ὕδωρ water + ἄγγος or αγγεῖον vessel), in reference to the shape of its seed capsules.",
        img:"https://images.pexels.com/photos/8680401/pexels-photo-8680401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },

];

const menuIcon = document.querySelector(".menuIcon");
const menuModalWrap = document.querySelector(".menuModalWrap");
const menuModalBox = document.querySelector(".menuModalBox");
const menuList = document.querySelector(".menuList");
const closeMenuModal = document.querySelector(".closeMenuModal")

menuList.innerHTML = season.map(function(s){
    return "<a href='https://imweb.me/' class='menu'>" + s + "</a>"
    }).join("");

function openMenu (){
    menuModalBox.style.cssText = "display:initial;";
    menuModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
    closeMenuModal.style.cssText = "display:initial;"
    menuList.style.cssText = "display:none;";
};

menuIcon.addEventListener("click", openMenu);

closeMenuModal.addEventListener("click", function (){
    menuModalWrap.style.removeProperty("position");
    menuModalBox.style.cssText = "display:none;";
    menuModalWrap.style.removeProperty("background-color");
    menuModalWrap.style.removeProperty("width");
    menuModalWrap.style.removeProperty("height");
    closeMenuModal.style.cssText = "display:none;"
   });

const cards = document.querySelector(".cards");
const cardModals = document.querySelector(".cardModals")

cards.innerHTML = cardList.map(function(card){
    return  "<div>"
                + "<div class='card'>"
                    + "<img alt='cardImg' class='cardImg' src=" +  card.img + "></img>"
                    + "<div class='cardTitle'>" + card.title + "</div>"
                    + "<div class='cardContents'>" + card.content + "</div>"
                + "</div>"
            + "</div>"
}).join("");

const card = document.querySelectorAll(".card");
const menuModalList = document.querySelector(".menuModalList");

menuModalList.innerHTML = season.map(function(s){
    return "<a href='https://imweb.me/' class='modalMenu'>" + s + "</a>"
}).join("");

card[0].addEventListener("click", function openModal(){
    cardModals.innerHTML = "<div class='cardModalWrap'>"
                    + "<div class='cardModalBox'>"
                        + "<div class='cardModal'>"
                            + "<img alt='modalImg' class='modalImg' src=" + (cardList[0].img) + "></img>"
                            + "<div class='modalTextBox'>"
                                + "<div class='modalTitle'>" + (cardList[0].title) +"</div>"
                                + "<div class='modalContents'>" + (cardList[0].content) + "</div>"
                            + "</div>"
                            + "<button class='closeModal'><i class='fa-solid fa-x'></i></button>"
                        + "</div>"
                    + "</div>"
                + "</div>";
        
    const cardModalBox = document.querySelector(".cardModalBox");
    const cardModalWrap = document.querySelector(".cardModalWrap");
    const closeModal = document.querySelector(".closeModal");
        
    cardModalBox.style.cssText = "display:initial;";
    cardModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
        
    closeModal.addEventListener("click", function (){
        cardModalBox.style.cssText = "display:none;";
        cardModalWrap.style.removeProperty("position");
        cardModalWrap.style.removeProperty("background-color");
        cardModalWrap.style.removeProperty("width");
        cardModalWrap.style.removeProperty("height");
    });
});

card[1].addEventListener("click", function openModal(){
    cardModals.innerHTML = "<div class='cardModalWrap'>"
                    + "<div class='cardModalBox'>"
                        + "<div class='cardModal'>"
                            + "<img alt='modalImg' class='modalImg' src=" + (cardList[1].img) + "></img>"
                            + "<div class='modalTextBox'>"
                                + "<div class='modalTitle'>" + (cardList[1].title) +"</div>"
                                + "<div class='modalContents'>" + (cardList[1].content) + "</div>"
                            + "</div>"
                            + "<button class='closeModal'><i class='fa-solid fa-x'></i></button>"
                        + "</div>"
                    + "</div>"
                + "</div>";
        
    const cardModalBox = document.querySelector(".cardModalBox");
    const cardModalWrap = document.querySelector(".cardModalWrap");
    const closeModal = document.querySelector(".closeModal");
        
    cardModalBox.style.cssText = "display:initial;";
    cardModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
        
    closeModal.addEventListener("click", function (){
        cardModalBox.style.cssText = "display:none;";
        cardModalWrap.style.removeProperty("position");
        cardModalWrap.style.removeProperty("background-color");
        cardModalWrap.style.removeProperty("width");
        cardModalWrap.style.removeProperty("height");
    });
});

card[2].addEventListener("click", function openModal(){
    cardModals.innerHTML = "<div class='cardModalWrap'>"
                    + "<div class='cardModalBox'>"
                        + "<div class='cardModal'>"
                            + "<img alt='modalImg' class='modalImg' src=" + (cardList[2].img) + "></img>"
                            + "<div class='modalTextBox'>"
                                + "<div class='modalTitle'>" + (cardList[2].title) +"</div>"
                                + "<div class='modalContents'>" + (cardList[2].content) + "</div>"
                            + "</div>"
                            + "<button class='closeModal'><i class='fa-solid fa-x'></i></button>"
                        + "</div>"
                    + "</div>"
                + "</div>";
        
    const cardModalBox = document.querySelector(".cardModalBox");
    const cardModalWrap = document.querySelector(".cardModalWrap");
    const closeModal = document.querySelector(".closeModal");
        
    cardModalBox.style.cssText = "display:initial;";
    cardModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
        
    closeModal.addEventListener("click", function (){
        cardModalBox.style.cssText = "display:none;";
        cardModalWrap.style.removeProperty("position");
        cardModalWrap.style.removeProperty("background-color");
        cardModalWrap.style.removeProperty("width");
        cardModalWrap.style.removeProperty("height");
    });
});

card[3].addEventListener("click", function openModal(){
    cardModals.innerHTML = "<div class='cardModalWrap'>"
                    + "<div class='cardModalBox'>"
                        + "<div class='cardModal'>"
                            + "<img alt='modalImg' class='modalImg' src=" + (cardList[3].img) + "></img>"
                            + "<div class='modalTextBox'>"
                                + "<div class='modalTitle'>" + (cardList[3].title) +"</div>"
                                + "<div class='modalContents'>" + (cardList[3].content) + "</div>"
                            + "</div>"
                            + "<button class='closeModal'><i class='fa-solid fa-x'></i></button>"
                        + "</div>"
                    + "</div>"
                + "</div>";
        
    const cardModalBox = document.querySelector(".cardModalBox");
    const cardModalWrap = document.querySelector(".cardModalWrap");
    const closeModal = document.querySelector(".closeModal");
        
    cardModalBox.style.cssText = "display:initial;";
    cardModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
        
    closeModal.addEventListener("click", function (){
        cardModalBox.style.cssText = "display:none;";
        cardModalWrap.style.removeProperty("position");
        cardModalWrap.style.removeProperty("background-color");
        cardModalWrap.style.removeProperty("width");
        cardModalWrap.style.removeProperty("height");
    });
});

card[4].addEventListener("click", function openModal(){
    cardModals.innerHTML = "<div class='cardModalWrap'>"
                    + "<div class='cardModalBox'>"
                        + "<div class='cardModal'>"
                            + "<img alt='modalImg' class='modalImg' src=" + (cardList[4].img) + "></img>"
                            + "<div class='modalTextBox'>"
                                + "<div class='modalTitle'>" + (cardList[4].title) +"</div>"
                                + "<div class='modalContents'>" + (cardList[4].content) + "</div>"
                            + "</div>"
                            + "<button class='closeModal'><i class='fa-solid fa-x'></i></button>"
                        + "</div>"
                    + "</div>"
                + "</div>";
        
    const cardModalBox = document.querySelector(".cardModalBox");
    const cardModalWrap = document.querySelector(".cardModalWrap");
    const closeModal = document.querySelector(".closeModal");
        
    cardModalBox.style.cssText = "display:initial;";
    cardModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
        
    closeModal.addEventListener("click", function (){
        cardModalBox.style.cssText = "display:none;";
        cardModalWrap.style.removeProperty("position");
        cardModalWrap.style.removeProperty("background-color");
        cardModalWrap.style.removeProperty("width");
        cardModalWrap.style.removeProperty("height");
    });
});

card[5].addEventListener("click", function openModal(){
    cardModals.innerHTML = "<div class='cardModalWrap'>"
                    + "<div class='cardModalBox'>"
                        + "<div class='cardModal'>"
                            + "<img alt='modalImg' class='modalImg' src=" + (cardList[5].img) + "></img>"
                            + "<div class='modalTextBox'>"
                                + "<div class='modalTitle'>" + (cardList[5].title) +"</div>"
                                + "<div class='modalContents'>" + (cardList[5].content) + "</div>"
                            + "</div>"
                            + "<button class='closeModal'><i class='fa-solid fa-x'></i></button>"
                        + "</div>"
                    + "</div>"
                + "</div>";
        
    const cardModalBox = document.querySelector(".cardModalBox");
    const cardModalWrap = document.querySelector(".cardModalWrap");
    const closeModal = document.querySelector(".closeModal");
        
    cardModalBox.style.cssText = "display:initial;";
    cardModalWrap.style.cssText = "position: fixed; background-color: rgba(0, 0, 0, 0.8); width: 100%; height: 100%;";
        
    closeModal.addEventListener("click", function (){
        cardModalBox.style.cssText = "display:none;";
        cardModalWrap.style.removeProperty("position");
        cardModalWrap.style.removeProperty("background-color");
        cardModalWrap.style.removeProperty("width");
        cardModalWrap.style.removeProperty("height");
    });
});

const topBtn = document.querySelector(".topBtn");

topBtn.addEventListener("click", function(e){
    e.preventDefault();
    window.scrollTo({top:0, behavior:"smooth"});
});

