import ColorList from './ColorList';

function App() {
  const colors = ['Crimson', 'Teal', 'Goldenrod', 'Indigo', 'Coral'];

  return (
    <div>
      <h1>Color List</h1>
      <ColorList colors={colors} />
    </div>
  );
}

export default App;