import html2canvas from 'html2canvas';


const DownloadBtn: React.FC = () => {
    
    const handleDownloadImage = async () => {

        const element = document.querySelector('.data-table') as HTMLElement;
    
        if (!element) {
          console.error('Element not found');
          return;
        }
    
        try {
          const canvas = await html2canvas(element);
          const data = canvas.toDataURL('image/jpg');
          const link = document.createElement('a');
    
          link.href = data;
          link.download = 'downloaded-image.jpg';
    
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Failed to capture the element:', error);
        }
      };

    return (
        <button className="download-button" onClick={handleDownloadImage} >
            <svg
                height="24px"
                width="24px"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 288.929 288.929"
                xmlSpace="preserve"
            >
                <g>
                    <g>
                        <path
                            style={{ fill: '#010002' }}
                            d="M181.969,152.054c-5.167-4.324-12.869-3.655-17.198,1.507l-8.104,9.654V12.205
                            C156.667,5.466,151.206,0,144.462,0s-12.205,5.466-12.205,12.205v151.016l-8.099-9.654c-4.33-5.156-12.02-5.842-17.198-1.507
                            c-5.162,4.34-5.836,12.037-1.501,17.198l29.659,35.343c0.098,0.114,0.223,0.196,0.326,0.31c0.359,0.397,0.751,0.767,1.159,1.104
                            c0.239,0.207,0.468,0.413,0.718,0.598c0.451,0.326,0.93,0.604,1.43,0.865c0.245,0.136,0.479,0.283,0.734,0.402
                            c0.571,0.256,1.175,0.441,1.784,0.604c0.212,0.054,0.408,0.141,0.626,0.19c0.832,0.179,1.692,0.283,2.573,0.283
                            c0.887,0,1.746-0.103,2.578-0.283c0.212-0.049,0.413-0.136,0.625-0.19c0.609-0.169,1.213-0.348,1.784-0.604
                            c0.256-0.12,0.49-0.267,0.734-0.402c0.495-0.261,0.979-0.544,1.43-0.865c0.25-0.185,0.479-0.392,0.718-0.598
                            c0.408-0.343,0.794-0.707,1.153-1.104c0.103-0.114,0.228-0.19,0.326-0.31l29.659-35.343
                            C187.811,164.091,187.136,156.395,181.969,152.054z"
                        />
                        <path
                            style={{ fill: '#010002' }}
                            d="M230.584,288.929H58.35c-13.092,0-23.742-10.65-23.742-23.736V92.954
                            c0-13.086,10.65-23.736,23.742-23.736h44.247c6.739,0,12.205,5.466,12.205,12.205s-5.466,12.211-12.205,12.211H59.019v170.885
                            h170.89V93.628h-42.593c-6.744,0-12.205-5.466-12.205-12.211c0-6.739,5.461-12.205,12.205-12.205h43.262
                            c13.092,0,23.742,10.65,23.742,23.736v172.244C254.325,278.279,243.676,288.929,230.584,288.929z"
                        />
                    </g>
                </g>
            </svg>
        </button>
    );
};

export default DownloadBtn;
