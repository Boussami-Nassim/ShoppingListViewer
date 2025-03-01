import React from "react";
import "@fontsource/poppins";

const getShoppingListFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  const encodedData = params.get("data");

  if (!encodedData) return [];

  try {
    // ✅ Decode Base64
    const decodedString = atob(encodedData);

    // ✅ Parse JSON
    return JSON.parse(decodedString);
  } catch (error) {
    console.error("Error decoding shopping list:", error);
    return [];
  }
};

const ShoppingListPage = () => {
  const list = getShoppingListFromURL();

  return (
    <div style={styles.container}>

      {/* Background Icons */}
      {[...Array(20)].map((_, index) => (
        <img
          key={index}
          src={`/icons/fruit/fruit${Math.floor(Math.random() * 8 + 1)}.png`}
          alt="fruit"
          style={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "50px",
            height: "50px",
            opacity: 0.2,
            zIndex: 1,
          }}
        />
      ))}

      <h1 style={styles.title}>Shopping List</h1>

      {list.length === 0 ? (
        <p style={styles.emptyMessage}>No items in the shopping list.</p>
      ) : (
        <div style={styles.card}>
          {list.map((item, index) => (
            <div key={index} style={styles.listItem}>
              <span style={styles.itemTitle}>{item.title}</span>
              <span style={styles.itemDetails}>
                {item.quantity} {item.unit}
              </span>
            </div>
          ))}
        </div>
      )}

      <footer style={styles.footer}>
        View this list in the <a href="https://play.google.com/store/apps/details?id=com.yourapp" style={styles.link}>Trood App</a>.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#EEF5F6",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1A5D64",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    zIndex: 10
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  itemTitle: {
    fontWeight: "600",
    color: "#197E89",
  },
  itemDetails: {
    color: "#555",
  },
  emptyMessage: {
    color: "#888",
  },
  footer: {
    marginTop: "20px",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#1A5D64",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default ShoppingListPage;