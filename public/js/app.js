// Thêm sự kiện click vào nút kiểm tra
document.getElementById('checkCorsBtn').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value.trim();
    const resultDiv = document.getElementById('result');
  
    // Kiểm tra nếu ô nhập trống
    if (!url) {
      resultDiv.textContent = 'Vui lòng nhập URL.';
      resultDiv.className = 'error';
      return;
    }
  
    try {
      // Gửi yêu cầu fetch với chế độ CORS
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors', // Chế độ CORS
      });
  
      // Kiểm tra nếu máy chủ phản hồi thành công
      if (response.ok) {
        resultDiv.textContent = 'Hỗ trợ CORS!';
        resultDiv.className = 'success';
      } else {
        resultDiv.textContent = `Lỗi: Máy chủ phản hồi với mã ${response.status}`;
        resultDiv.className = 'error';
      }
    } catch (error) {
      // Xử lý lỗi nếu không hỗ trợ CORS hoặc URL không hợp lệ
      resultDiv.textContent = 'Không hỗ trợ CORS hoặc URL không hợp lệ.';
      resultDiv.className = 'error';
    }
  });
  