type IndicatorOnOffType = {
  onOff: boolean
}

export function IndicatorOnOff(props: IndicatorOnOffType) {
  return (
    <span className={props.onOff ? 'indicatorOn' : 'indicatorOff'}></span>
  );
}