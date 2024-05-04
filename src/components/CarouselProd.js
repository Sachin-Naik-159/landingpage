import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1600 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 639 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};
const data0 = [
  {
    t: 0,
    p1: "Skin Care+",
    h: "Intensive formulations for complex skin",
    p2: `Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants.`,
    bt: "Browse formulations ",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/6ZQhryRe2slYhtGmdiWlUQ/bc59a136742dc8ffc0942d8c171cbddb/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_X-Large_3000x3054px.png",
    b: "Immaculate Facial Tonic",
    p: "Exfoliating tonic with a light finish",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/nWdJmaoekK7lzZDGZs6Ap/b47f80e978322c2faf73a5ebb46ad8aa/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Front_X-Large_3000x1592px.png",
    b: "B Triple C Facial Balancing Gel",
    p: "Embracing, vitamin-rich hydration",
  },
  {
    t: 1,
    img: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    b: "Lucent Facial Concentrate",
    p: "A Vitamin C-rich layering serum",
  },
  {
    t: 1,
    img: "https://images.ctfassets.net/u1nb1km7t5q7/3EfM6zrFfHbrUaVxQSoR7A/f40aa3b013d2b7a62645644891a33b38/Aesop_Skin_Exalted_Eye_Serum_15ml_Web_Medium_535x522px.png",
    b: "Exalted Eye Serum",
    p: "Lightweight, vitamin-rich serum ",
  },
  {
    t: 1,
    img: "https://images.ctfassets.net/u1nb1km7t5q7/7rW6gSSdQaKEYUYCzvyUAO/bbe51282897aa259c0943a39f92fe996/Aesop_Skin_Sublime_Replenishing_Night_Masque_60mL_Web_Large_901x478px.png",
    b: "Sublime Replenishing Night Masque",
    p: "Richly nourishing hydration for overnight use",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/53Q5a81QFoAlk9fqyzPRWi/ff703aa4abdc6d0fa3479da1347a19a7/Aesop_Skin_Damascan_Rose_Facial_Treatment_25mL_Web_Large_684x668px.png",
    b: "Damascan Rose Facial Treatment",
    p: "A blend of vitamin-rich botanical extracts",
  },
];
const data1 = [
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/6ZQhryRe2slYhtGmdiWlUQ/bc59a136742dc8ffc0942d8c171cbddb/Aesop_Skin_Immaculate_Facial_Tonic_100mL_Web_Front_X-Large_3000x3054px.png",
    b: "Immaculate Facial Tonic",
    p: "Exfoliating tonic with a light finish",
  },
  {
    t: 1,
    img: "https://images.ctfassets.net/u1nb1km7t5q7/3QfGNj3NpYM5h3zLpQHWK0/6ac142e435309dc51f2dc2e477b54a95/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png",
    b: "Lucent Facial Concentrate",
    p: "A Vitamin C-rich layering serum",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/1qKF9KcniWuX07rpfHmHoB/afd3fd8b4d7a79be87ec8a66c0021a7e/Aesop_Skin_Protective_Facial_Lotion_SPF50_50mL_Web_Front_X-Large_3000x3054px.png",
    b: "Protective Facial Lotion SPF50",
    p: "Offers protection from UVA and UVB rays ",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/4hQAXgS0eGue4ds2OyZOIK/5557c667d029da695fd286e5c39f75b1/Aesop-Geranium-Leaf-Duet-with-Product-Large-1584x962px.png",
    b: "Geranium Leaf Duet",
    p: "A gentle cleanser and aromatic balm",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/7pSX4Pu6HnCjxoAI6wumyi/228cf97bf6d53cb2cfde1d33c251db38/Aesop_Fragrance_Rozu_Eau_de_Parfum_50mL_Web_Front_X-Large_3000x2930px.png",
    b: "Rōzu Eau de Parfum",
    p: "Floral, green and woody",
  },

  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/63tJ9VwYYIp1EjOJJtzejf/7b3547dce05e449b122c703a91644ec5/Aesop_Home_Aganice_Aromatique_Candle_Web_Front_A_Large_1800x1573px.png",
    b: "Aganice Aromatique Candle",
    p: "Cardamom, Mimosa, Tobacco",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/3jqPva1xtBadadHegSTGmm/15e2abea6103475fc23442370737331b/Aesop_Bundle_Cleansing_and_Hydration_for_Dry_Skin_Web_Large_960x1090px.png",
    b: "Cleansing & Hydration for Dry Skin",
    p: "Ideal for those who favour cream-based formulations",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/3Nhd8WCdxq9zWNMs3uvOBC/f74a12b5ff26a9a6d845a68e0e115dd7/Aesop_Bundle_Resurrection_Hand_Care_Duo_Web_Large_960x1090px.png",
    b: "Resurrection Hand Care Duo",
    p: "Two staples for deserving hands",
  },
  {
    t: 1,
    img: "https://www.aesop.com/u1nb1km7t5q7/7HiBQE8eBJQl5hsO7l3yTi/8fe99fb794f72fda03d157b266337215/Aesop_Bundle_Tacit_Ensemble_Web_Large_960x1090px.png",
    b: "Tacit Ensemble",
    p: "For those who enjoy citrus aromas",
  },
];
const data2 = [
  {
    t: 0,
    p1: "Sun Care and SPF",
    h: "Pair time in the sun with intelligent care",
    p2: `Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment.`,
    bt: "Browse formulations ",
  },
  {
    t: 1,
    b: "Protective Facial Lotion SPF25 ",
    p: "Broad-spectrum protection and hydration",
    img: "https://www.aesop.com/u1nb1km7t5q7/7rQwKlCTwpQ5vNOQBwg7KA/8c79ad1019aa5dfe09583f5a02c77701/Aesop_Skin_Protective_Facial_Lotion_SPF25_Asia_EU_Web_Large_782x796px.png",
  },
  {
    t: 1,
    b: "Protective Body Lotion SPF50",
    p: "Lightweight broad-spectrum protection",
    img: "https://www.aesop.com/u1nb1km7t5q7/6497Z5CI7aE6GSSkpLHqou/9180575f7cab867e82df9436207a6c71/Aesop_Body_Protective_Body_Lotion_SPF50_Asia_EU_150mL_Web_Front_X-Large_3000x3456px.png",
  },
  {
    t: 1,
    b: "Sage & Zinc Facial Hydrating Lotion SPF15 ",
    p: "Hydrating sun protection",
    img: "https://www.aesop.com/u1nb1km7t5q7/3vyJxHFKnFJHT4PGafyPqU/9704272f3c9eb199098d4ea28f51ba0c/Aesop_Skin_Sage_and_Zinc_Facial_Hydrating_Lotion_SPF15_50mL_Web_X-Large_1173x1194px.png",
  },
  {
    t: 1,
    b: "Petitgrain Reviving Body Gel",
    p: "Leaves skin feeling cooled, revived",
    img: "https://www.aesop.com/u1nb1km7t5q7/D2FJEA5pA57WNR6Crjerl/5a9f34865fac2097cf46d5d30822c79c/Aesop_Body_Petitgrain_Reviving_Body_Gel_150mL_Web_Front_X-Large_3000x3456px.png",
  },
];
function CarouselProd(v) {
  let data = data0;
  if (v.v === 1) {
    data = data1;
  } else if (v.v === 2) {
    data = data2;
  }
  return (
    <div className="mt-5" style={{ backgroundColor: "#F6F5E8" }}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={false}
      >
        {data.map((e) => {
          if (e.t === 0) {
            return (
              <div className="pt-5 pb-4">
                <div className="w-75">
                  <p className="fontsize">{e.p1}</p>
                  <h2>{e.h}</h2>
                  <p className="fontsize">{e.p2}</p>
                  <span>
                    {e.bt}
                    {"    "}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <img
                  className="w-100"
                  src={e.img}
                  alt="First slide"
                  height={500}
                  style={{ objectFit: "contain" }}
                />
                <div>
                  <b className="cen">{e.b}</b>
                  <p className="cen">{e.p}</p>
                </div>
              </div>
            );
          }
        })}
      </Carousel>
    </div>
  );
}

export default CarouselProd;
