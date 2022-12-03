const products = [
    {
        name: "LẨU THẬP CẨM",
        image: "https://cdn.daotaobeptruong.vn/wp-content/uploads/2019/11/lau-thap-cam.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Nếu bạn đã quá quen thuộc với món lẩu bò mỗi khi du lịch Đà Lạt thì hãy chuyển sang một phiên bản đặc biệt hơn chính là món lẩu bò atiso. Món ăn này được chế biến từ các nguyên liệu như lẩu bò thông thường nhưng có thêm sự xuất hiện của bông atiso khiến cho nước dùng ở đây có vị ngọt thanh còn thịt bò thì mềm và thơm.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU ĐUÔI BÒ",
        image: "https://www.thucphamchosach.com/images/lau-duoi-bo-5.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Sẽ là một thiếu sót nếu như nhắc đến các món ăn về thịt bò nhưng lại thiếu lẩu đuôi bò giàu chất đậm và ấm nóng. Với những ngày mưa còn gì tuyệt vời hơn khi cùng nhau thưởng thức nồi lẩu đuôi bò nóng hổi và hàn huyên những câu chuyện.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU DỰNG BÒ",
        image: "https://cdn.tgdd.vn/Files/2021/12/13/1404039/tong-hop-cach-nau-cac-mon-lau-bo-ngon-dam-vi-nhu-ngoai-hang-202112131010391203.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Món lẩu dựng bò thơm phức với dựng bò chín mềm, nước dùng được nêm nếm ngon ngọt, hấp dẫn. Khi ăn thì bạn nhúng phần bắp bò cắt lát mỏng và các loại rau ăn kèm vào nồi lẩu để thưởng thức. Ngoài ra bạn có thể ăn kèm món ăn này với mì hoặc bún đều ngon.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU ÓC BÒ",
        image: "https://botonhanphat.vn/wp-content/uploads/2020/12/Lau-oc-bo-1200x600.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Lẩu óc bò là món ăn nhiều dinh dưỡng cho cả người lớn lẫn trẻ em. Ngoài giá trị dinh dưỡng cao lẩu óc bò còn được yêu thích bởi mùi vị ngon tuyệt bởi cảm giác béo ngậy khó tả trên đầu lưỡi. Tham khảo bài viết dưới đây để biết rõ hơn những lợi ích của óc bò cũng như cách chế biến vẫn giữ được giá trị dinh dưỡng nhé!",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU BÒ BẮP HOA",
        image: "https://images.foody.vn/res/g89/883691/s800/foody-lau-bap-hoa-327-637127163813288022.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Không khí se lạnh luôn là điều mà du khách yêu thích mỗi khi đến du lịch Đà Lạt. Và trong tiết trời se lạnh ấy mà được xì xụp miếng nước lẩu nóng hổi thì không còn gì tuyệt vời hơn. Chính vì thế mà ở Đà Lạt lẩu luôn là món ăn được ưu tiên lựa chọn hàng đầu trong mỗi bữa ăn. Nếu đến Đà Lạt mà không ăn lẩu là một điều thiếu sót và càng thiếu sót hơn khi không đến thưởng thức món lẩu bò Bắp Hoa.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU 62d384e2453db4e8c36bdc8e",
        image: "https://cdn.vietnamtours247.com/2021/02/cf11b35d-fb_img_1614162988343.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Món tủ của 62d384e2453db4e8c36bdc8e",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "LẨU BÒ TOYUM",
        image: "http://cdn.tgdd.vn/Files/2021/02/27/1331001/tiec-cuoi-tuan-tai-nha-voi-cac-loai-lau-orifood-tai-bach-hoa-xanh-202102271102060172.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Vì sao gọi là lẩu tomyum? Được mệnh danh là vua của các món lẩu, lẩu tomyum mang hương vị đặc trưng của xứ sở Chùa Vàng. Trong tiếng Thái, “tom” là từ dùng để chỉ món súp hoặc canh, “yum” mang nghĩa chua cay. Nói nôm na, lẩu tomyum chính là món canh súp của người Thái Lan mang hương vị chua cay đặc biệt.",
        price: "199000",
        unit: "Nồi"
    },
    {
        name: "BÒ HẤP SẢ",
        image: "https://netamthuc.vn/wp-content/uploads/2021/06/Mon-bap-bo-hap-bia-ngon-thom-va-mem-696x450.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò hấp sả gần như chỉ có 2 nguyên liệu chính là bắp bò và sả. Bạn sẽ không phải chuẩn bị nhiều bước cũng như tiết kiệm thời gian nấu nướng hơn. Điểm nhấn của món bò hấp sả nằm ở nước chấm nên bạn hay “dắt túi” cách pha mắm gừng hoặc mắm chanh tỏi ớt thật vừa miệng",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ HẤP TÍA TÔ",
        image: "http://botocuchigiasi.net/wp-content/uploads/2021/09/cach-lam-be-hap-sa.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò hấp tía tô ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ HẤP HÀNH",
        image: "https://media.foody.vn/res/g1/4261/prof/s/foody-mobile-mobile-jpg-821-635738497589775267.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò hấp hành thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ HẤP GỪNG",
        image: "https://cdn.voh.com.vn/voh/thumbnail/2019/01/23/cachlambapbohapgungsa_20190123142313.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò hấp gừng thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "LÁCH SÁCH HẤP HÀNH",
        image: "https://meovatgiadinh.vn/wp-content/uploads/2020/12/meovatgiadinh-cach-so-che-la-lach-bo-nhanh-trong-tich-tac-6.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Lách xách bò hấp gừng thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ THẬP CẨM HẤP",
        image: "https://www.laubohoangthu.vn/upload/data/images/product/medium/1556266622_duoibosate.png",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ NƯỚNG TẢNG (Đặc sản Tây Ninh)",
        image: "https://29foods.com/media/news/520_bo_my_nuong_tang.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BA CHỈ NƯỚNG",
        image: "http://cdn.tgdd.vn/Files/2017/04/14/972222/15-cach-uop-thit-nuong-ngon-dung-chuan-vi-nha-hang-tai-nha-202201071019267824.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "SƯỜN BÒ NƯỚNG",
        image: "https://giadinh.tv/wp-content/uploads/2019/05/cach-lam-suon-bo-nuong.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "GU BÒ NƯỚNG",
        image: "http://botocuchigiasi.net/wp-content/uploads/2021/10/uop-thit-bo-nuong.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ NƯỚNG LỤI",
        image: "https://cachlammonngon.vn/wp-content/uploads/2016/07/thit-bo-nuoc.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ XIÊN QUE",
        image: "https://29foods.com/media/product/154_b___xi__n_n_____ng.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "BÒ SỐT TIÊU",
        image: "https://sotaynauan.com/wp-content/uploads/2016/07/bo-sot-tieu-den-dspl1.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHIÊN TRỨNG",
        image: "https://cdn.cet.edu.vn/wp-content/uploads/2018/12/com-chien-trung-muoi.jpg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHIÊN TỎI",
        image: "http://foodhero.vn/upload/product/cctoi-8851.jpg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHIÊN THỊT BÒ",
        image: "https://yummyday.vn/uploads/images/com-chien-thit-bo.jpg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "149000",
        unit: "Đĩa"
    },
    {
        name: "CƠM CHÁY - BÒ KHO SẢ ỚT",
        image: "https://cdn.tgdd.vn/2021/11/CookRecipe/Avatar/bo-kho-sa-nghe-thumbnail.jpg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc8e",
        description: "Bò thập cẩm hấp thơm ngon",
        price: "199000",
        unit: "Đĩa"
    },
    {
        name: "Artisan Plate of our Hanmade Coldcuts and Cheese",
        image: "https://media-cdn.tripadvisor.com/media/photo-p/1d/2a/5e/7b/artisan-antipasti-platter.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Nhắc đến ẩm thực phương Tây không thể không nhắc đến các loại phô mai và thịt nguội. Đây là những món khai vị phổ biến và được yêu thích trong các bữa tiệc bởi hương vị thơm ngon và giá trị dinh dưỡng cao. Biết cách phân loại và trình bày các loại phô mai (cheese plate) hay chuẩn bị phần đồ nguội (cold cuts) đẹp mắt rất quan trọng đối với một đầu bếp món Âu chuyên nghiệp.",
        price: "200000",
        unit: "Đĩa"
    },
    {
        name: "Carpaccio, Tartare or Viteo Tonato",
        image: "https://www.sfizioso.it/wp-content/uploads/2017/06/Carpaccio-di-vitello-con-ravanelli-rucola-e-salsa-alla-senape-e1496319800140.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Để chế biến ra Carpaccio, người ta phải thái thịt sống thành từng lát mỏng, sau đó rưới dầu olive lên cùng một chút chanh rồi cất vào tủ lạnh, khi thưởng thức phải lấy ra ăn ngay lúc còn lạnh. Nguyên liệu làm nên món thịt này cũng rất đa dạng, từ những món thịt sống hay những loại cá như cá hồi, cá ngừ...",
        price: "165000",
        unit: "Đĩa"
    },
    {
        name: "Cheese Platter",
        image: "https://i2.wp.com/www.lifeasastrawberry.com/wp-content/uploads/2018/11/how-to-build-a-cheese-plate.png",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Cheese Plate (đĩa phô mai tổng hợp) là một trong những món đãi khách đơn giản, đẹp mắt và được yêu thích nhất trong các bữa tiệc nhẹ của người phương Tây.",
        price: "150000",
        unit: "Đĩa"
    },
    {
        name: "Cured Meat Platter",
        image: "https://images.squarespace-cdn.com/content/v1/5616db19e4b0e8660091da10/1615985488271-70X0LJZPAK9EFIUOQTFK/LargeCharcuteriePlatter-TheRealCure-BritishCharcuterie.jpg?format=1500w",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Vậy, món chính của ngày hôm nay, chính là “Cured Meat”, hay còn được hiểu nôm na là thịt được xử lý bằng gia vị như muối, giấm, đường thông qua những biện pháp như sấy, ngâm, xông khói… – thứ rất hợp để thưởng thức cùng Whisky. Rượu và đồ ăn nói chung thường đi kèm với nhau",
        price: "160000",
        unit: "Đĩa"
    },
    {
        name: "Salad",
        image: "https://cdn.tgdd.vn/Files/2022/01/24/1412588/salad-la-gi-15-mon-salad-dinh-duong-cho-bua-com-gia-dinh-202201241950443123.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Salad là món gỏi trộn thanh đạm và thường xuất hiện trong thực đơn món Âu, nhưng bạn đã thực sự hiểu rõ về nó.",
        price: "100000",
        unit: "Đĩa"
    },
    {
        name: "Handmade Pasta Salsiccia",
        image: "https://www.monsieur-cuisine.com/fileadmin/_processed_/c/9/csm_26941_Rezeptfoto_a9f4d_d355f330da.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "195000",
        unit: "Đĩa"
    },
    {
        name: "Handmade Pasta w/Gorgonzola",
        image: "https://www.the-pasta-project.com/wp-content/uploads/Easy-Gorgonzola-Pasta-with-Olives-alla-Cenere-13.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "220000",
        unit: "Đĩa"
    },
    {
        name: "Handmade Pasta w/Veggies",
        image: "https://www.wholesomelicious.com/wp-content/uploads/2021/02/Vegetable-Garden-Pasta-Picture-1024x1434.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "180000",
        unit: "Đĩa"
    },
    {
        name: "Italian Pasta Salssiccia",
        image: "https://previews.123rf.com/images/yatomo/yatomo1403/yatomo140300278/26785694-italian-pasta-rigate-con-salsiccia.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Pasta với ragù vẫn được thuận miệng gọi là “mỳ Ý sốt bò băm” hoặc “bolognaise” theo tiếng Pháp, bắt nguồn từ tên gọi “ragù alla Bolognese” trong tiếng Ý tức là món ragu của vùng Bologna. Loại pasta lý tưởng nhất cho sốt này là pasta sợi bản to (tagliatelle, pappardelle, fettucine), pasta hình ống (penne, rigatoni, tortiglioni) hay những loại hình sò (cavatelli) để có “chỗ” cho các miếng thịt băm trú ẩn",
        price: "160000",
        unit: "Đĩa"
    },
    {
        name: "Risotto w/Formaggi",
        image: "https://staritprodcdnimages3.azureedge.net/files/styles/recipe_main_image_670x420/windowsazurestorage/recipes/15498373113e05cca7117068912c6035f4993194bc.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Phô mai bột",
        price: "300000",
        unit: "Đĩa"
    },
    {
        name: "Soup of the day",
        image: "https://images-na.ssl-images-amazon.com/images/I/61i9fGKVeDL.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Súp",
        price: "140000",
        unit: "Nồi"
    },
    {
        name: "Soda of Tonic",
        image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/club-soda-vs-seltzer-sparkling-tonic-1296x728-feature-1296x728.jpg?h=1528",
        categories_id: "62d38311453db4e8c36bdc75",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Soda of Tonic",
        price: "35000",
        unit: "Ly"
    },
    {
        name: "Sparkling water",
        image: "https://product.hstatic.net/200000283891/product/img_1325_9d0f9378f8b24698952030f3b0320f3a_master.jpg",
        categories_id: "62d38311453db4e8c36bdc75",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Sparkling water",
        price: "90000",
        unit: "Ly"
    },
    {
        name: "Mocktails",
        image: "https://www.happy.rentals/admin/uploads/5e1c750cf335dVariety%20of%20mocktails%20for%20top%20page%20of%20blog.jpg",
        categories_id: "62d38311453db4e8c36bdc75",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "Mocktails",
        price: "50000",
        unit: "Ly"
    },
    {
        name: "ITALIAN STYLE COFFE",
        image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2012/03/22/16/rexfeatures_1399841a.gif?width=1200",
        categories_id: "62d38311453db4e8c36bdc75",
        menu_id: "62d384e2453db4e8c36bdc8d",
        description: "ITALIAN STYLE COFFE",
        price: "35000",
        unit: "Ly"
    },
    {
        name: "PIZZA SEAFOOD (SỐT CÀ CHUA, PHOMAI, TÔM, MỰC, CÁ NGỪ NGÂM DẦU, HÀNH TÂY)",
        image: "https://images.foody.vn/res/g23/222880/s120x120/66dbbffc-bf2e-4124-ac9a-93a3799e-b81b5177-210925155356.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Moột trong những món best seller của MiMi",
        price: "141900",
        unit: "Đĩa"
    },
    {
        name: "SASHIMI CÁ HỒI - SALMON SASHIMI",
        image: "https://img.meta.com.vn/Data/image/2020/10/20/cach-lam-sashimi-ca-hoi-3.png",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Gồm 6 miếng cá hồi tươi sống siêu ngon",
        price: "152900",
        unit: "Đĩa"
    },
    {
        name: "CƠM NGUỘI CÁ HỒI TÁI SỐT GRILL - SALMON ROLL WITH GRILL SAUCE",
        image: "https://images.foody.vn/res/g23/222880/s120x120/65269484-9878-480c-9ffb-047286fa-3ef004cd-210926083224.jpeg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Một trong những món cơm nguội siêu ngon và luôn được quý khách chọn lựa đầu tiên",
        price: "141900",
        unit: "Đĩa"
    },
    {
        name: "SASHIMI COMBO A - (SALMON - TUNA - NISHIN - HOTATE - OCTOPUS - HOKKIGAI)",
        image: "https://images.foody.vn/res/g23/222880/s120x120/302679d8-a617-4eba-af39-c0fa777b-f14f72ee-210925155900.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Set combo A là một trong những set Sashimi bán chạy nhất của MiMi",
        price: "482900",
        unit: "Đĩa"
    },
    {
        name: "CREAM BRULEE",
        image: "https://images.foody.vn/res/g23/222880/s120x120/36bc6cf4-9b20-41e3-845b-661851c4-202ab0ff-220308074448.jpeg",
        categories_id: "62d38311453db4e8c36bdc7d",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Món Cream Brulee, bạn sẽ bị kích thích bởi sự thú vị khi nghe âm thanh của tiếng lớp đường bị vỡ, lớp kem lạnh, béo và mịn đi cùng với lớp đường giòn tan ngọt ngào hơi thơm vị caramel siêu ngon",
        price: "53900",
        unit: "Đĩa"
    },
    {
        name: "CƠM NGUỘI GÀ SỐT TERIYAKI - TERIYAKI CHICKEN ROLL",
        image: "https://images.foody.vn/res/g23/222880/s120x120/4fe1f044-fd83-40f1-9300-52c85d38-30a9a2f1-220416185937.jpeg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Những miếng gà xào cùng sốt teriyaki đuoecj cuộn trong lớp cơm và rong biể,kèm theo đó là hương vị của mè rang hoà quyện vào từng miếng cơm.Thật thơm ngon!",
        price: "93000",
        unit: "Đĩa"
    },
    {
        name: "PIZZA GÀ SỐT PESTO - CHICKEN PESTO PIZZA",
        image: "https://images.foody.vn/res/g23/222880/s120x120/37c2a3a0-f4b2-4de4-a4e6-60962383-c3c30eb1-220416184740.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Chiếc pizza được nướng giòn rụm cùng vs sốt pesto,những miếng gà mềm mềm hoà quyện cùng sốt pesto và cheese tạo nên một hương vị đặc biệt cho chiếc pizza.",
        price: "120000",
        unit: "Đĩa"
    },
    {
        name: "PIZZA BEEF",
        image: "https://images.foody.vn/res/g23/222880/s120x120/41f28706-6982-443e-8f9d-96d5cbd5-bd8e385a-210917173209.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Sốt cà chua, phomai, tôm, mực, cá ngừ ngâm dầu, hành tây",
        price: "141900",
        unit: "Đĩa"
    },
    {
        name: "PIZZA PEPERONI",
        image: "https://images.foody.vn/res/g23/222880/s120x120/6eb25fce-7733-410a-a3a8-088f67b9-b85674bf-210917181603.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Sốt cà chua, phomai, xúc xích Pepperoni",
        price: "119000",
        unit: "Đĩa"
    },
    {
        name: "PIZZA CHEESE",
        image: "https://images.foody.vn/res/g23/222880/s120x120/731a6289-90d9-46b7-a68e-f8af4713-fda69ecb-210917155152.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Sự kết hợp từ 4 loại phomai Ý. Dùng kèm Mật Ong. Không dùng với tương cà hay tương ớt ạ.",
        price: "207900",
        unit: "Đĩa"
    },
    {
        name: "PIZZA SALMON",
        image: "https://images.foody.vn/res/g23/222880/s120x120/a127471a-7d29-4612-a7cd-c0c7be30-9ed7c3db-211006184752.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "Sốt cà chua, phomai, cá hồi",
        price: "163900",
        unit: "Đĩa"
    },
    {
        name: "CAÁ HỒI SASHIMI",
        image: "https://images.foody.vn/res/g23/222880/s120x120/210ae1ab-afda-41e9-88fd-499582ac-0e2b49bb-210917120618.jpeg",
        categories_id: "62d38311453db4e8c36bdc7a",
        menu_id: "62d384e2453db4e8c36bdc8c",
        description: "6 slices",
        price: "152900",
        unit: "Đĩa"
    },
    {
        name: "Bánh mì ốp la",
        image: "https://banhmihonghoa.com/upload/product/banh-mi-op-la1530151696.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        menu_id: "62d384e2453db4e8c36bdc8b",
        description: "Bánh mì ốp la",
        price: "40000",
        unit: "Ổ"
    },
    {
        name: "Mì Quảng",
        image: "https://hanamihotel.com/wp-content/uploads/2022/03/mi-quang-ga.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8b",
        description: "Mì quảng",
        price: "52000",
        unit: "Tô"
    },
    {
        name: "Hủ tiếu",
        image: "https://img-global.cpcdn.com/recipes/90267c96d71f1775/1200x630cq70/photo.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8b",
        description: "Hủ tiếu",
        price: "52000",
        unit: "Tô"
    },
    {
        name: "Gỏi bò ngũ sắc",
        image: "https://cdn.tgdd.vn/2021/03/CookRecipe/GalleryStep/thanh-pham-401.jpg",
        categories_id: "62d38311453db4e8c36bdc7e",
        menu_id: "62d384e2453db4e8c36bdc8b",
        description: "Gỏi bò ngũ sắc",
        price: "130000",
        unit: "Đĩa"
    },
    {
        name: "Gỏi đu đủ (Song tam)",
        image: "https://images.foody.vn/res/g28/277894/s120x120/e7d1df0e-bc4a-4fcb-b74a-4427f05c-8c65ba2e-210922111250.jpeg",
        categories_id: "62d38311453db4e8c36bdc7e",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Gỏi đu đủ",
        price: "69000",
        unit: "Đĩa"
    },
    {
        name: "Gỏi tôm sống",
        image: "https://images.foody.vn/res/g28/277894/s120x120/d3b79e97-b4ef-467f-a365-1cce138e-2d5e91f4-210922111312.jpeg",
        categories_id: "62d38311453db4e8c36bdc7e",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Gỏi tôm sống",
        price: "75000",
        unit: "Đĩa"
    },
    {
        name: "Miến Thái",
        image: "https://images.foody.vn/res/g28/277894/s120x120/19569a3f-c145-42a0-8d5f-b8a941dd-4f0ccca4-210922112009.jpeg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Miến thái",
        price: "80000",
        unit: "Tô"
    },
    {
        name: "Lẩu Thái",
        image: "https://images.foody.vn/res/g28/277894/s120x120/a94f9c0f-c64f-4c59-90d6-589b3aec-201ab1d0-210923184524.jpeg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Lẩu thái",
        price: "220000",
        unit: "Nồi"
    },
    {
        name: "Lẩu Khao Bun Kha",
        image: "https://images.foody.vn/res/g28/277894/s120x120/e852e938-79f1-440c-8024-3f857a11-6b6eaf34-210923184458.jpeg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Lảua 62d384e2453db4e8c36bdc8a",
        price: "370000",
        unit: "Nồi"
    },
    {
        name: "Chả cá Thái Lan",
        image: "https://images.foody.vn/res/g28/277894/s120x120/2987382d-3f77-46b6-bd9a-2628ab7f-42d2b8ba-210923184639.jpeg",
        categories_id: "62d38311453db4e8c36bdc74",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "chả cá thái lan",
        price: "138000",
        unit: "Đĩa"
    },
    {
        name: "Xôi xoài",
        image: "https://images.foody.vn/res/g28/277894/s120x120/09a095a5-eb4c-449e-ae05-ce161bf9-932043d5-210923184854.jpeg",
        categories_id: "62d38311453db4e8c36bdc74",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Xôi xoài",
        price: "58000",
        unit: "Đĩa"
    },
    {
        name: "Kem xôi dừa",
        image: "https://images.foody.vn/res/g28/277894/s120x120/da86d84f-339b-424c-a72e-77d75f94-ae193280-210923184845.jpeg",
        categories_id: "62d38311453db4e8c36bdc74",
        menu_id: "62d384e2453db4e8c36bdc8a",
        description: "Kem xôi dừa",
        price: "58000",
        unit: "Đĩa"
    },
    {
        name: "BÒ PHÔ MAI",
        image: "https://media.dalatcity.org//Images/LDG/bongconganh/BoBitTet/cropper_636906947704776575.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "Bò phô mai",
        price: "35000",
        unit: "Ổ"
    },
    {
        name: "Bò Ttrứng",
        image: "https://anh.eva.vn/upload/3-2017/images/2017-08-29/bo-ne-op-la-bo-ne-op-la-8-1503971118-width650height686.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "bò trứng",
        price: "25000",
        unit: "Ổ"
    },
    {
        name: "Bò lúc lắc đặc biệt",
        image: "https://images.foody.vn/res/g98/972444/prof/s640x400/foody-upload-api-foody-mobile-bo-ne-191024164732.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "bò lúc lắc đặc biệt",
        price: "50000",
        unit: "Ổ"
    },
    {
        name: "Bánh mì cá muối",
        image: "https://cdn.tgdd.vn/2021/07/CookProduct/m1thum-1200x676.jpg",
        categories_id: "62d38311453db4e8c36bdc77",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "bánh mì cá muối",
        price: "25000",
        unit: "Ổ"
    },
    {
        name: "Nui xào bò",
        image: "https://cdn.daynauan.info.vn/wp-content/uploads/2019/03/nui-xao-bo.jpg",
        categories_id: "62d38311453db4e8c36bdc74",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "nui xào bò",
        price: "30000",
        unit: "Đĩa"
    },
    {
        name: "62d38311453db4e8c36bdc78 bít tết sốt cá mòi",
        image: "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-C2DHEU63WB6YVE/hero/cf41aa1372234c1e855c17befb808fdb_1646793772654144958.png",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "cơm bít tết sốt cá mòi",
        price: "50000",
        unit: "Đĩa"
    },
    {
        name: "Chawanmushi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246471684787_5.%20Chawanmushi.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "茶碗蒸し Chawanmushi Non-sweet Steamed egg...",
        price: "48000",
        unit: "Chén"
    },
    {
        name: "Kimuchi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246416684714_4.%20Kimuchi.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "キムチ Kimuchi Kimchi Kim chi",
        price: "69000",
        unit: "Chén"
    },
    {
        name: "Agendashi Dofu",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246370747501_3.%20Agedashi%20Dofu.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "あげだし豆腐 Agedashi Dofu Fried tofu with dashi...",
        price: "76000",
        unit: "Chén"
    },
    {
        name: "Sashimi Omakase A",
        image: "https://www.fujiyasushi.net/Upload/products/637096304088679305_1.%20Sashimi%20Omakase%20A.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "刺身おまかせA Sashimi Omakase A Assorted Sashimi...",
        price: "749000",
        unit: "Đĩa"
    },
    {
        name: "Hotate",
        image: "https://www.fujiyasushi.net/Upload/products/637096306001335535_9.%20Hotate.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "帆立 Hotate Sell S&ograve; điệp",
        price: "207000",
        unit: "Chén"
    },
    {
        name: "Tako ssm",
        image: "https://www.fujiyasushi.net/Upload/products/637096306458054084_11.%20Tako.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "タコ Tako Octopus Bạch tuộc",
        price: "166000",
        unit: "Đĩa"
    },
    {
        name: "Kaki",
        image: "https://www.fujiyasushi.net/Upload/products/637096308803523045_21.%20Kaki.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc89",
        description: "カキ Kaki Oysters H&agrave;u",
        price: "170000",
        unit: "Đĩa"
    },
    {
        name: "Miì Quảng Trộn Tôm Thịt",
        image: "https://mocviquan.vn/wp-content/uploads/2021/09/Mi-Quang-tron-thap-cam_mocviquan.vn_.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Yellow Noodle Salad With Shrimp & Pork",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "Phở bò",
        image: "https://cdn.tgdd.vn/Files/2017/03/18/962092/an-lien-3-bat-pho-voi-cong-thuc-nau-pho-nay-202201261419401397.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Beef Noodle Soup",
        price: "99000",
        unit: "Tô"
    },
    {
        name: "62d38311453db4e8c36bdc78 Gà Cà Ri",
        image: "https://cdn.bepcuoi.com/media/720-com-ga-ca-ri-bepcuoi-178.jpg",
        categories_id: "62d38311453db4e8c36bdc76",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Yangzhou Beef with Lemongrass",
        price: "120000",
        unit: "Tô"
    },
    {
        name: "62d38311453db4e8c36bdc78 đậu khuôn cà ri",
        image: "https://ttol.vietnamnetjsc.vn/images/2021/03/04/15/00/ca-ri-dau-hu-8.jpg",
        categories_id: "62d38311453db4e8c36bdc73",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Tofu Curry Rice",
        price: "95000",
        unit: "Đĩa"
    },
    {
        name: "Súp Bí",
        image: "https://thucduongbaoan.com.vn/wp-content/uploads/2017/08/anh23-sup-bi-do-Copy.jpg",
        categories_id: "62d38311453db4e8c36bdc73",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Pumpkin Soup",
        price: "95000",
        unit: "Tô"
    },
    {
        name: "Súp vườn xanh",
        image: "https://zaca.vn/wp-content/uploads/2016/11/cach-nau-sup-bong-cai-xanh-2.jpg",
        categories_id: "62d38311453db4e8c36bdc73",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Green Garden Soup",
        price: "75000",
        unit: "Tô"
    },
    {
        name: "Cà chua & Cà chua xào",
        image: "https://monngonmoingay.tv/wp-content/uploads/2019/08/trung-chien-ca-chua.jpg",
        categories_id: "62d38311453db4e8c36bdc73",
        menu_id: "62d384e2453db4e8c36bdc88",
        description: "Cà chua xào ",
        price: "75000",
        unit: "Đĩa"
    },
    {
        name: "Chawanmushi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246471684787_5.%20Chawanmushi.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "茶碗蒸し Chawanmushi Non-sweet Steamed egg...",
        price: "48000",
        unit: "Chén"
    },
    {
        name: "Kimuchi",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246416684714_4.%20Kimuchi.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "キムチ Kimuchi Kimchi Kim chi",
        price: "69000",
        unit: "Chén"
    },
    {
        name: "Agendashi Dofu",
        image: "https://www.fujiyasushi.net/Upload/blogs/637100246370747501_3.%20Agedashi%20Dofu.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "あげだし豆腐 Agedashi Dofu Fried tofu with dashi...",
        price: "76000",
        unit: "Chén"
    },
    {
        name: "Sashimi Omakase A",
        image: "https://www.fujiyasushi.net/Upload/products/637096304088679305_1.%20Sashimi%20Omakase%20A.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "刺身おまかせA Sashimi Omakase A Assorted Sashimi...",
        price: "749000",
        unit: "Đĩa"
    },
    {
        name: "Hotate",
        image: "https://www.fujiyasushi.net/Upload/products/637096306001335535_9.%20Hotate.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "帆立 Hotate Sell S&ograve; điệp",
        price: "207000",
        unit: "Chén"
    },
    {
        name: "Tako ssm",
        image: "https://www.fujiyasushi.net/Upload/products/637096306458054084_11.%20Tako.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "タコ Tako Octopus Bạch tuộc",
        price: "166000",
        unit: "Đĩa"
    },
    {
        name: "Kaki",
        image: "https://www.fujiyasushi.net/Upload/products/637096308803523045_21.%20Kaki.jpg",
        categories_id: "62d38311453db4e8c36bdc7b",
        menu_id: "62d384e2453db4e8c36bdc87",
        description: "カキ Kaki Oysters H&agrave;u",
        price: "170000",
        unit: "Đĩa"
    },
    {
        name: "Artisan Plate of our Hanmade Coldcuts and Cheese",
        image: "https://media-cdn.tripadvisor.com/media/photo-p/1d/2a/5e/7b/artisan-antipasti-platter.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc86",
        description: "Nhắc đến ẩm thực phương Tây không thể không nhắc đến các loại phô mai và thịt nguội. Đây là những món khai vị phổ biến và được yêu thích trong các bữa tiệc bởi hương vị thơm ngon và giá trị dinh dưỡng cao. Biết cách phân loại và trình bày các loại phô mai (cheese plate) hay chuẩn bị phần đồ nguội (cold cuts) đẹp mắt rất quan trọng đối với một đầu bếp món Âu chuyên nghiệp.",
        price: "200000",
        unit: "Đĩa"
    },
    {
        name: "Carpaccio, Tartare or Viteo Tonato",
        image: "https://www.sfizioso.it/wp-content/uploads/2017/06/Carpaccio-di-vitello-con-ravanelli-rucola-e-salsa-alla-senape-e1496319800140.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc86",
        description: "Để chế biến ra Carpaccio, người ta phải thái thịt sống thành từng lát mỏng, sau đó rưới dầu olive lên cùng một chút chanh rồi cất vào tủ lạnh, khi thưởng thức phải lấy ra ăn ngay lúc còn lạnh. Nguyên liệu làm nên món thịt này cũng rất đa dạng, từ những món thịt sống hay những loại cá như cá hồi, cá ngừ...",
        price: "165000",
        unit: "Đĩa"
    },
    {
        name: "Cheese Platter",
        image: "https://i2.wp.com/www.lifeasastrawberry.com/wp-content/uploads/2018/11/how-to-build-a-cheese-plate.png",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc86",
        description: "Cheese Plate (đĩa phô mai tổng hợp) là một trong những món đãi khách đơn giản, đẹp mắt và được yêu thích nhất trong các bữa tiệc nhẹ của người phương Tây.",
        price: "150000",
        unit: "Đĩa"
    },
    {
        name: "Cured Meat Platter",
        image: "https://images.squarespace-cdn.com/content/v1/5616db19e4b0e8660091da10/1615985488271-70X0LJZPAK9EFIUOQTFK/LargeCharcuteriePlatter-TheRealCure-BritishCharcuterie.jpg?format=1500w",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc86",
        description: "Vậy, món chính của ngày hôm nay, chính là “Cured Meat”, hay còn được hiểu nôm na là thịt được xử lý bằng gia vị như muối, giấm, đường thông qua những biện pháp như sấy, ngâm, xông khói… – thứ rất hợp để thưởng thức cùng Whisky. Rượu và đồ ăn nói chung thường đi kèm với nhau",
        price: "160000",
        unit: "Đĩa"
    },
    {
        name: "Salad",
        image: "https://cdn.tgdd.vn/Files/2022/01/24/1412588/salad-la-gi-15-mon-salad-dinh-duong-cho-bua-com-gia-dinh-202201241950443123.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc86",
        description: "Salad là món gỏi trộn thanh đạm và thường xuất hiện trong thực đơn món Âu, nhưng bạn đã thực sự hiểu rõ về nó.",
        price: "100000",
        unit: "Đĩa"
    },
    {
        name: "Frutti di mare",
        image: "https://www.ragu.com/wp-content/uploads/2016/01/Fruit_de_mar_mobile.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc85",
        description: "Scallops in saffon Sauce, sea Prawns with butter Sauce",
        price: "230000",
        unit: "Đĩa"
    },
    {
        name: "Grilled Asparagus & Romaine",
        image: "https://i2.wp.com/highlandsranchfoodie.com/wp-content/uploads/2009/06/grilled-romaine-salad-recipe-1024x683.jpg",
        categories_id: "62d38311453db4e8c36bdc7c",
        menu_id: "62d384e2453db4e8c36bdc85",
        description: "With walnut sauted in our special Carlic Seafood Broth & Sauvignon Blanc",
        price: "240000",
        unit: "Đĩa"
    },
    {
        name: "62d38311453db4e8c36bdc78 chiên cố đô",
        image: "https://saigonangi.com/wp-content/uploads/2021/08/cd4-620x375.jpg",
        categories_id: "62d38311453db4e8c36bdc78",
        menu_id: "62d384e2453db4e8c36bdc84",
        description: "62d38311453db4e8c36bdc78 chiên cố đô",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "Ba chỉ Hàn Quốc",
        image: "https://pastaxi-manager.onepas.vn/content/uploads/articles/cach-lam-thit-ba-roi-nuong-kieu-han/cach-lam-thit-ba-roi-nuong-kieu-han-1.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc84",
        description: "Ba chỉ Hàn Quốc",
        price: "109000",
        unit: "Đĩa"
    },
    {
        name: "Ức vịt nướng sốt thơm",
        image: "https://chefofking.net/wp-content/uploads/2019/01/%E1%BB%A8c-v%E1%BB%8Bt-n%C6%B0%E1%BB%9Bng-s%E1%BB%91t-cam-r%C6%B0%E1%BB%A3u-vang-752x435.jpg",
        categories_id: "62d38311453db4e8c36bdc72",
        menu_id: "62d384e2453db4e8c36bdc84",
        description: "ức vịt nướng sốt thơm",
        price: "109000",
        unit: "Đĩa"
    },
    {
        name: "Cá đù chiên giòn mắm me",
        image: "https://img-global.cpcdn.com/recipes/0278678f76ad783f/400x400cq70/photo.jpg",
        categories_id: "62d38311453db4e8c36bdc80",
        menu_id: "62d384e2453db4e8c36bdc84",
        description: "Cá đù chiên mắm me",
        price: "99000",
        unit: "Đĩa"
    },
    {
        name: "Khoai tây mập địt",
        image: "https://ghemassageelip.com/wp-content/uploads/2021/05/an-khoai-tay-co-map-khong.jpg",
        categories_id: "62d38311453db4e8c36bdc80",
        menu_id: "62d384e2453db4e8c36bdc84",
        description: "khoai tây mập địt",
        price: "69000",
        unit: "Đĩa"
    }
];

export default products;