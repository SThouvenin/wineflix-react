const ProgressBar = ({min, max, value}) => {

    return (
        <div className="amount-consumed">
        <progress min={min} max={max} value={value}></progress>
      </div>
    );
}

export default ProgressBar;