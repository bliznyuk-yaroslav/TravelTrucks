import css from './Filter.module.css';
export default function Filter() {
  return (
    <div>
      <div>
        <label htmlFor="">Location</label>
        <div>
          <select value={location} placeholder="Choose location" />
        </div>
      </div>
    </div>
  );
}
