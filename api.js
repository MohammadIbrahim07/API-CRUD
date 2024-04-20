<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery API CRUD</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

<script>
  // Function to fetch data
  function fetchData() {
    $.ajax({
      url: 'https://api.example.com/data',
      type: 'GET',
      success: function(data) {
        console.log('Data:', data);
      },
      error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
      }
    });
  }

  // Function to create data
  function createData(newData) {
    $.ajax({
      url: 'https://api.example.com/data',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newData),
      success: function(data) {
        console.log('Created data:', data);
      },
      error: function(xhr, status, error) {
        console.error('Error creating data:', error);
      }
    });
  }

  // Function to update data
  function updateData(id, updatedData) {
    $.ajax({
      url: `https://api.example.com/data/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(updatedData),
      success: function(data) {
        console.log('Updated data:', data);
      },
      error: function(xhr, status, error) {
        console.error('Error updating data:', error);
      }
    });
  }

  // Function to delete data
  function deleteData(id) {
    $.ajax({
      url: `https://api.example.com/data/${id}`,
      type: 'DELETE',
      success: function(data) {
        console.log('Data deleted successfully');
      },
      error: function(xhr, status, error) {
        console.error('Error deleting data:', error);
      }
    });
  }

  // Example data for creating and updating
  const newEntry = {
    name: 'New Entry',
    description: 'Description of new entry'
  };

  const updatedEntry = {
    name: 'Updated Entry',
    description: 'Updated description'
  };

  // Usage examples
  fetchData(); // Fetch existing data
  createData(newEntry); // Create new data
  updateData(1, updatedEntry); // Update existing data (replace 1 with the actual ID)
  deleteData(1); // Delete existing data (replace 1 with the actual ID)
</script>

</body>
</html>
