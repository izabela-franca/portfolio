const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    if (tab.classList.contains("selected")) {
      return;
    }

    selectingTab(tab);

    showingTabInfo(tab);
  });
});

function selectingTab(tab) {
  const selectedTab = document.querySelector(".tab.selected");
  selectedTab.classList.remove("selected");
  tab.classList.add("selected");
}

function showingTabInfo(tab) {
  const selectedInfo = document.querySelector(".info.selected");
  selectedInfo.classList.remove("selected");
  const elementIdInfoTab = `info-${tab.id}`;

  const showedInfo = document.getElementById(elementIdInfoTab);
  showedInfo.classList.add("selected");
}
