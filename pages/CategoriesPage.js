// enable I and another page object
const { I } = inject();

module.exports = {
  // Categories
  url: '/index.php?option=com_redshopb&view=categories&Itemid=101',
  newButton: "//button[contains(normalize-space(), 'New')]",
  saveCloseButton: "//button[contains(normalize-space(), 'Save & Close')]",
  saveSuccess: "Category successfully submitted.",
  deleteButton: "//button[contains(normalize-space(), 'Delete')]",
}