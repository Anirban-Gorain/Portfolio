import "./introduction.css";

export default function Introduction() {
  return (
    <div className="introduction-container">
      <div className="left ">
        <h1 className="">
          Hello there I am <span className="text-color">Anirban Gorain</span>, I
          am a Software Engineer from <span className="flag-text">India</span>
        </h1>
        <h4>
          Explore different directories to uncover my projects, technical
          expertise, and professional journey.
        </h4>
      </div>
      <div className="right">
        <div className="image-frame">
          <img src="https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-6/477441708_1176715730507498_6435540101179014592_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=ZIwXmVnRLfcQ7kNvgGxK8DP&_nc_oc=AdiLMNVVGzau81pxRK1w2Pfj2pZYVqgw6YnT_VDTcOMwYbcJCQxoRkL4ghi_VcIBTYBh-3Y6ed3VscrTJ384VwUp&_nc_zt=23&_nc_ht=scontent.fblr1-5.fna&_nc_gid=ASBwfo2lSxWBb8ubaTdlnRj&oh=00_AYGNzUzbLRpR7aBicYKqvuSHNdeoammG5Avo6WMOj83NYg&oe=67DA259E" />
        </div>
      </div>
    </div>
  );
}
