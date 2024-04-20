// Function to fetch employee data
async function fetchEmployeeData() {
  try {
    const response = await fetch('https://api.coresignal.com/employee-data');
    const data = await response.json();
    console.log('Employee Data:', data);
  } catch (error) {
    console.error('Error fetching employee data:', error);
  }
}

// Function to create a new employee
async function createEmployee(newEmployeeData) {
  try {
    const response = await fetch('https://api.coresignal.com/employee-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployeeData),
    });
    const data = await response.json();
    console.log('Created employee:', data);
  } catch (error) {
    console.error('Error creating employee:', error);
  }
}

// Function to update an existing employee
async function updateEmployee(employeeId, updatedEmployeeData) {
  try {
    const response = await fetch(`https://api.coresignal.com/employee-data/${employeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployeeData),
    });
    const data = await response.json();
    console.log('Updated employee:', data);
  } catch (error) {
    console.error('Error updating employee:', error);
  }
}

// Function to delete an existing employee
async function deleteEmployee(employeeId) {
  try {
    const response = await fetch(`https://api.coresignal.com/employee-data/${employeeId}`, {
      method: 'DELETE',
    });
    console.log('Employee deleted successfully');
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
}

// Example data for creating a new employee
const newEmployeeData = {
  name: 'John Doe',
  position: 'Software Engineer',
  department: 'Engineering',
};

// Example data for updating an employee
const updatedEmployeeData = {
  name: 'Jane Smith',
  position: 'Senior Software Engineer',
};

// Call functions to demonstrate CRUD operations
fetchEmployeeData();
createEmployee(newEmployeeData);
updateEmployee(employeeId, updatedEmployeeData); // Replace employeeId with the actual ID
deleteEmployee(employeeId); // Replace employeeId with the actual ID
