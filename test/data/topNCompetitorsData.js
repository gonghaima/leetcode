export const inputData = {
  case1:
  {
    numCompetitors: 6,
    topNCompetitors: 2,
    competitors: ["newshop", "shownow", "afshion", "fashionbeats", "mymarket", "tcellular"],
    numReviews: 6,
    reviews:
      ["newshop is providing good services; newshop",
        "best services by newshop",
        "fashionbeats has great services in the city",
        "I am proud to have fashionbeats",
        "mymarket has awesome services",
        "Thanks Newshop for the quick delivery"
      ]
  }
};

export const expected = {
  case1: ["newshop", "fashionbeats"]
};
