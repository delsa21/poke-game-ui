import "./App.css";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* container game */}
        <div
          style={{ width: "350px", height: "500px", border: "5px black solid", borderRadius: "5px 5px 35px", backgroundColor: "#DEDEE1" }}
        >
          {/* container screen */}
          <div
            style={{
              paddingTop: "5%",
              paddingBottom: "25%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "85%",
                height: "200px",
                backgroundColor: "black",
              }}
            ></div>
          </div>
          {/* container buttons */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                backgroundColor: "black",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "#82165E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#82165E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#82165E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#82165E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
            </div>
            <div style={{ paddingTop: "30%" }}>
              {/* botones A y B */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "gray",
                }}
              ></div>
            </div>
            <div
              style={{
                width: "90px",
                height: "40px",
                backgroundColor: "#C7C5CA",
                borderRadius: "10px",
                display: "flex", gap: "10px", transform: "rotate(-20deg)",
              }}
            >
              <div>
                <button
                  style={{
                    backgroundColor: "#82165E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
              <div>
              <button
                  style={{
                    backgroundColor: "#82165E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
