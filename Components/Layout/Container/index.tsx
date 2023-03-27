import {PropsWithChildren} from 'react'

type Props = {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  parentClass?: string,
}

const LayoutContainer = (props: PropsWithChildren<Props>) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      width:'100vw',
      ...props.style,
    }}>
      <div style={{ width:'95vw'}} className={`${props.className ? props.className : ''} min-h-[100vh]`}>
        {props.children}
      </div>
    </div>
  )
}


export default LayoutContainer