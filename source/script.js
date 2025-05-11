const videoElement = document.getElementById('webcamVideo');

 async function startWebcam() {
  try {
   console.log('Attempting to access webcam...');
   const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
   console.log('Webcam access granted:', stream);
   videoElement.srcObject = stream;
  } catch (error) {
   console.error('Error accessing webcam:', error);
   console.log('Error name:', error.name);
   console.log('Error message:', error.message);
  }
 }

 // Make sure startWebcam() is called appropriately
 // For example, in your startApp() function:
 function startApp(mode) {
  document.getElementById('initialScreen').style.display = 'none';
  document.getElementById('webcamVideo').style.display = 'block';
  document.getElementById('videoCanvas').style.display = 'block';
  startWebcam(); // Call the webcam function
  console.log('Ứng dụng bắt đầu ở chế độ:', mode);
 }