import React from "react";

function Footer() {
  return (
    <div className="bg-footer">
      <div className="container">
        <div className="flex pt-5 pb-10">
          <div className="w-1/2">
            <h4 className="font-bold ">
              CÔNG TY CỔ PHẦN THƯƠNG MẠI - DỊCH VỤ LL.VN
            </h4>
            <p className="text-xs mt-3">
              © 1997 - 2020 Công Ty Cổ Phần Thương Mại - Dịch Vụ LL.VN Giấy
              chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp
              lần đầu ngày 30 tháng 05 năm 2007
            </p>
            <p className="text-xs line-clamp-3">
              Website phongvu.vn thuộc quyền sở hữu của Công ty Cổ phần Thương
              Mại - Dịch Vụ Phong Vũ và được phát triển bởi Teko.
            </p>
          </div>
          <div className="w-1/2 ml-10">
            <div>
              <h6 className="font-bold text-sm">Địa chỉ trụ sở chính:</h6>
              <p className="text-xs line-clamp-3">
                Công viên phần mềm Quang Trung, Tân Chánh Hiệp, Quận 12, Hồ Chí
                Minh
              </p>
            </div>
            <div>
              <h6 className="font-bold text-sm">
                Văn phòng điều hành miền Bắc:
              </h6>
              <p className="text-xs line-clamp-3">
                Tầng 2, Số 47 Phố Thái Hà, Phường Trung Liệt, Quận Đống Đa,
                Thành phố Hà Nội
              </p>
            </div>
            <div>
              <h6 className="font-bold text-sm">
                Văn phòng điều hành miền Nam:
              </h6>
              <p className="text-xs line-clamp-3">
                Công viên phần mềm Quang Trung, Tân Chánh Hiệp, Quận 12, Hồ Chí
                Minh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
