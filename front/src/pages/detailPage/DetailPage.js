import "./DetailPage.css";
import SampleImage from '../../assets/detailPage/printer.png';
import Profile from "./Profile";
import DetailContents from "./DetailContents";

function DetailPage({mockRequest}) { 
    return(
        <div className="detailpage">
            <div className="leftSide">
                <div calssName="detailImg">
                    <img src={SampleImage} />
                </div>
                <Profile />
            </div>
            <div className="rightSide">
                <DetailContents mockRequest={mockRequest} />
            </div>
        </div>
    );
}

export default DetailPage;