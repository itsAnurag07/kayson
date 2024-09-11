export default function Presence() {
    return (
      <div className="container contact-section">
        {/* Full-width image at the top */}
        <img className="image-presence p-5"
          src="Assets/img/PRESENCE MAP.png"
          alt="Top Banner"
          style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
        />
  
        {/* H2 with bold black color and custom size */}
        <h2 style={{ color: 'black', fontWeight: 'bold', fontSize: '28px', textAlign: 'center', marginBottom: '20px' }}>
          Branches Across India
        </h2>
  
        <div className="row p-5">
          <div className="col-md-4 mt-5">
            <h3 style={{ color: 'orange', fontWeight: 'bold' }}>JAMMU & KASHMIR</h3>
            <p>
              {/* Location Icon */}
              <i className="fas fa-map-marker-alt" style={{ color: 'darkblue', marginRight: '5px' }}></i>
              Sector-14 (Nr.), Kanal Road,
              <br /> Jammu Tawi (J&K), PIN -180004
              <br />
              {/* Phone Icon */}
              <i className="fas fa-phone" style={{ color: 'darkblue', marginRight: '5px' }}></i>
               +91-8360076476
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <h3 style={{ color: 'orange', fontWeight: 'bold' }}>CHANDIGARH</h3>
            <p>
              <i className="fas fa-map-marker-alt" style={{ color: 'darkblue', marginRight: '5px' }}></i>
              Booth No.120, Motor Market & Commercial Complex,
              <br /> Manimajra, Chandigarh, PIN -160101
              <br />
              <i className="fas fa-phone" style={{ color: 'darkblue', marginRight: '5px' }}></i>
               +91-9876600476
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <h3 style={{ color: 'orange', fontWeight: 'bold' }}>HARYANA</h3>
            <p>
              <i className="fas fa-map-marker-alt" style={{ color: 'darkblue', marginRight: '5px' }}></i>
              Opposite Sainik School, P.O. Kunjpura,
              <br /> Village Newal, Karnal, Haryana, PIN -132001
              <br />
              <i className="fas fa-phone" style={{ color: 'darkblue', marginRight: '5px' }}></i>
               +91-9779200476
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <h3 style={{ color: 'orange', fontWeight: 'bold' }}>RAJASTHAN</h3>
            <p>
              <i className="fas fa-map-marker-alt" style={{ color: 'darkblue', marginRight: '5px' }}></i>
              Plot No. 112, Taruchhaya Nagar First,
              <br /> Vill. Udaipuria, Teh. Amer, Sikar Road,
              <br /> Jaipur, Rajasthan, PIN -302028
              <br />
              <i className="fas fa-phone" style={{ color: 'darkblue', marginRight: '5px' }}></i>
               +91-9501900476
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <h3 style={{ color: 'orange', fontWeight: 'bold' }}>UTTAR PRADESH</h3>
            <p>
              <i className="fas fa-map-marker-alt" style={{ color: 'darkblue', marginRight: '5px' }}></i>
              Block F, 571/pn-571-572, Kanpur Road,
              <br /> Sigma Classes, Hindanagar Colony,
              <br /> Lucknow, Uttar Pradesh, PIN -226001
              <br />
              <i className="fas fa-phone" style={{ color: 'darkblue', marginRight: '5px' }}></i>
               +91-9501600476
            </p>
          </div>
          <div className="col-md-4 mt-5">
            <h3 style={{ color: 'orange', fontWeight: 'bold' }}>CHHATTISGARH & ODISHA</h3>
            <p>
              <i className="fas fa-map-marker-alt" style={{ color: 'darkblue', marginRight: '5px' }}></i>
              Beside Over Bridge, Near Ravishankar University,
              <br /> AMANAKA, Raipur, Chhattisgarh, PIN -492001
              <br />
              <i className="fas fa-phone" style={{ color: 'darkblue', marginRight: '5px' }}></i>
               +91-9876320476
            </p>
          </div>
        </div>
      </div>
    );
  }
  