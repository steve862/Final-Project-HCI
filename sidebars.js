/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()
function sidebarCollapse() {
    const sidebar = document.querySelector(".sidebar");
    const navItemName = document.querySelectorAll(".navItemName");
    sidebar.classList.toggle("collapsed");    
}