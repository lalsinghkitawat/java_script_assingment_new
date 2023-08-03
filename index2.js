var product_detail = [
  {
    id: "2",
    name: "Men Black MAMGP T7 Sweat Sporty Jacket",
    preview:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
    photos: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708559-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708542-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-3.jpg",
    ],
    description:
      "Black solid sporty jacket, has a mock collar, 3 pockets, zip closure, long sleeves, straight hem, unlined lining",
    size: [0, 0, 0, 1, 0],
    isAccessory: false,
    brand: "Puma",
    price: 7999,
  },
];

for (i = 0; i < product_detail.length; i++) {
  var div_tag = document.createElement("div");
  div_tag.className = "div_style1";
  var div_tag2 = document.createElement("div");
  div_tag.className = "div_style1";
  for (var j in product_detail[i]) {
    if (j == "preview") {
      var img_tag = document.createElement("img");
      img_tag.className = "img_img";
      img_tag.src = product_detail[i][j];
      div_tag.append(img_tag);
    }
    // if (j == "photos") {
    //   var img_tag2 = document.createElement("img");
    //   img_tag2.className = "img_img";
    //   img_tag2.src = product_detail[i][j];
    //   div_tag.append(img_tag2);
    // }
    if (j =="name"){
        var tag2 = document.createElement("p");
        tag2.className = "p_tag";
        tag2.innerHTML = product_detail[i][j];
        div_tag2.append(tag2);
      }
      if (j =="price"){
        var tag3 = document.createElement("p");
        tag3.className = "p_tag2";
        tag3.innerHTML = "price RS "+ product_detail[i][j];
        div_tag2.append(tag3);
      }
      if (j =="description"){
        var tag3 = document.createElement("p");
        tag3.className = "p_tag3";
        tag3.innerHTML = "Description <BR>"+ product_detail[i][j];
        div_tag2.append(tag3);
      }if(j=="id"){
      var btn= document.createElement("button")
      btn.innerHTML = "AddToCart"+product_detail[i][j]
      div_tag2.append(btn)
      }
    document.getElementById("demo3").appendChild(div_tag);
    document.getElementById("demo4").appendChild(div_tag2);
  }
}
