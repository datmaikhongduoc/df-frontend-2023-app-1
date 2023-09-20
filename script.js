// Lấy danh sách tất cả các nút "Delete"
const deleteButtons = document.querySelectorAll('.deleteButton');
const addBookss = document.querySelector('.AddBook');
// Lặp qua từng nút "Delete" và thêm sự kiện click
deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Lấy phần tử section có class "handleDelete"
    const handleDeleteSection = document.querySelector('.handleDelete');

    // Loại bỏ class "hidden" để hiển thị phần đó
    if (handleDeleteSection) {
      handleDeleteSection.classList.remove('hidden');
    }
  });
});

addBookss.addEventListener('click', () => {
      // Lấy phần tử section có class "handleDelete"
      const handleCreateSection = document.querySelector('.handleCreate');
  
      // Loại bỏ class "hidden" để hiển thị phần đó
      if (handleCreateSection) {
        handleCreateSection.classList.remove('hidden');
      }
    });
// Lấy nút "Cancel"
const cancelButton = document.querySelector('.CancelColor');

// Thêm sự kiện click cho nút "Cancel"
cancelButton.addEventListener('click', () => {
  // Lấy phần tử section có class "handleDelete"
  const handleDeleteSection = document.querySelector('.handleDelete');

  // Thêm class "hidden" vào phần "handleDelete" để ẩn nó
  if (handleDeleteSection) {
    handleDeleteSection.classList.add('hidden');
  }
});
//lấy giá trị value từ 'tr' 
function myFunction() {
  document.getElementById("myTable").deleteRow(1);
}
function myCreateFunction() {
  var topic = document.getElementById("TopicInput").value;
  var name = document.getElementById("NameInput").value;
  var author = document.getElementById("AuthorInput").value;
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(3);
  cell1.innerHTML = topic;
  cell2.innerHTML = name;
  cell3.innerHTML=  author;
}
