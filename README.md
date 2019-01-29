# ToDo-App
My test for Rockship company
Full name: Pham Dinh Thuy Tien. My contact: phamdinhthuytien@gmail.com. Phone 0342950842

**Các thư viện CSS và JS đã từng học và dùng:**
- jQuery ( làm cho JavaScript dễ tiếp cận hơn và thao tác với DOM trở nên dễ dàng hơn, hỗ trợ đa trình duyệt. Các tính năng cốt yếu của jQuery như xử lý DOM dựa trên CSS selectors, event handling và gọi AJAX đã thúc đẩy sự phổ biến của nó. Tuy nhiên,những framework và thư viện mới được dùng ngày nay có cách riêng để gắn kết DOM, và vì thế các kỹ thuật thao tác DOM truyền thống không còn được yêu cầu nữa)
- AngularJS là một trong những công nghệ JavaScript phổ biến nhất trong giới phát triển Front-End, tuy nhiên mặc cho sự phổ biến, AngularJS cũng từng có những sai sót của nó


**Sự khác biệt giữa ReactJS, JQuery và Angular**
+ React JS: ReactJS là một thư viện JS mã nguồn mở được sử dụng để tạo ra một giao diện người dùng thú vị được cung cấp bởi Facebook. Trọng tâm của ReactJS là cung cấp hiệu suất rendering, đặc biệt là hiệu quả trong việc hiển thị bộ dữ liệu lớn. Các ưu điểm có thể kể đến như: Render nhanh hơn. ReactJS đơn giản và tập trung lấy JS làm trọng tâm. Giúp dễ dàng nhập các thành phần cũng như debug JS tốt. ReactJS sử dụng JSX (cú pháp trích dẫn HTML).
+ Angular: là một trong những framework JavaScript mã nguồn mở hàng đầu có tất cả mọi thứ mà lập trình viên cần để tạo ra client-side của hầu hết các trang web, là một trong những framework tốt nhất thế giới, đầy đủ, có thể hoạt động trên bất kỳ nền tảng nào, nhất quán và có nhiều công cụ được làm sẵn. Angular ràng buộc dữ liệu 2 chiều, cung cấp các giải pháp thiết kế mẫu rất mạnh mẽ. Mỗi tệp ràng buộc cá nhân trên các trang HTML và có thể áp dụng các thay đổi trước khi hiển thị. Tuy nhiên nó cũng có một số nhược điểm. Trang chứa nhiều thành phần tương tác, có nguy cơ Angular trở nên chậm. Cần độ bảo mật cao. Dễ sử dụng nhưng khó sửa đổi.
+ JQuery: ưu điểm chính là rất dễ sử dụng, là một thư viện JS lớn, cộng đồng mã nguồn mở mạnh mẽ. JQuery cho phép bạn phát triển các template Ajax một cách dễ dàng. Nhược điểm bên cạnh đó có thể nói đến như làm client trở nên chậm chạp, nhiều chức năng vẫn chưa được phát triển, do đó bạn vẫn phải sử dụng javascript thuần để xây dựng chức năng này.


**Lý thuyết z-index:** Về lý thuyết thì cách thức hoạt động của z-index rất đơn giản: mỗi element trên trang web được hiển thị ngang và dọc theo 2 trục x và y, hiển thị thứ tự chồng lấn theo trục z (element nào có z-index cao hơn thì sẽ xếp phía trước element nào có z-index thấp hơn).
Mọi element trong một trong HTML có thể ở phía trước hay phía sau các element khác trong document. Đây được gọi là thứ tự xếp lớp (stacking order), về cơ bản, thứ tự xếp lớp chính là thứ tự xuất hiện trong HTML. Tuy nhiên:
+  z-index chỉ chạy đối với element nào được-set-position. Nếu bạn cố set z-index cho element nào không đặc tả position, nó sẽ không có tác dụng.
+  z-index có thể tạo ra stacking context.

 Một số quy tắc cơ bản để xác định stacking order
1.đầu tiên là root element của stacking context đó.
2.Các element được-set-position (và con của chúng) với giá trị z-index âm. (Giá trị cao hơn thì xếp trước, các element với giá trị bằng nhau thì xác định dựa vào thứ tự trong HTML)
3.Các element không-set-position.
4.Các element được-set-position (và con của chúng) với z-index bằng auto
5.Các element được-set-position (và con của chúng) với z-index dương.
(Các element với z-index âm được xếp đầu tiên trong stacking context, điều đó có nghĩa chúng xếp phía sau (khi hiển thị) tất cả các element khác. Vì điều này, một element hoàn toàn có thể hiển thị phía sau element cha của nó. Cách này chỉ thực hiện được nếu như element cha đó nằm trong cùng 1 stacking context và không phải là root element của stacking context đó).





