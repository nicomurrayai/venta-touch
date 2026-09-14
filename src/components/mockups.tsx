import Image from "next/image";
import { Icon } from "./icons";

export function OrderingMockup() {
  return <figure className="ordering-figure" aria-label="Ejemplo ilustrativo de la pantalla de pedidos y el ticket">
    <div className="ordering-halo" aria-hidden="true"/>
    <div className="order-screen">
      <div className="mock-brand"><span>VENTA<span>TOUCH</span></span><span className="mock-pill">TU PEDIDO</span></div>
      <div className="order-screen-content">
        <p className="mock-eyebrow">HECHO A TU GUSTO</p>
        <p className="mock-title">Un toque.<br/>Tu próximo favorito.</p>
        <div className="mock-categories"><span className="selected">Burgers</span><span>Acompañamientos</span><span>Bebidas</span></div>
        <div className="food-image"><Image src="/images/burger.webp" alt="Hamburguesa de ejemplo en el menú de autoservicio" width={500} height={500} sizes="(max-width: 640px) 230px, 320px"/><span className="food-tag">LA CLÁSICA</span></div>
        <div className="food-info"><div><strong>Double cheeseburger</strong><p>Doble carne, cheddar y pan brioche.</p></div><span className="mock-add" aria-hidden="true"><Icon name="plus" size={17}/></span></div>
        <div className="mock-cart"><Icon name="bag" size={16}/><span>Mi pedido</span><span>1 producto</span><Icon name="arrow" size={16}/></div>
      </div>
    </div>
    <div className="ticket"><span className="ticket-check"><Icon name="check" size={23}/></span><strong>¡Pedido confirmado!</strong><p>Ya estamos preparando<br/>algo rico para vos.</p><div className="ticket-divider"/><span className="ticket-label">TU NÚMERO DE PEDIDO</span><span className="ticket-number">024</span><span className="ticket-barcode" aria-hidden="true"/><span className="ticket-thanks">Gracias por elegirnos.</span></div>
    <figcaption>Pantallas y ticket ilustrativos.</figcaption>
  </figure>;
}

export function AdminMockup() {
  return <figure className="admin-figure" aria-label="Ejemplo ilustrativo del panel administrativo web">
    <div className="admin-window">
      <div className="browser-bar"><span className="browser-dots" aria-hidden="true"><i/><i/><i/></span><span><Icon name="shield" size={11}/>Panel administrativo</span><span className="browser-end"/></div>
      <div className="admin-app">
        <aside className="admin-sidebar" aria-hidden="true"><span className="mini-vt">VT<span>•</span></span><span className="sidebar-active"><Icon name="layers" size={18}/></span><span><Icon name="bag" size={18}/></span><span><Icon name="store" size={18}/></span><span><Icon name="settings" size={18}/></span></aside>
        <div className="admin-content">
          <div className="admin-breadcrumb">MI NEGOCIO <span>/</span> RESUMEN</div>
          <div className="admin-heading"><div><span className="mock-eyebrow">TODO EN UN MISMO LUGAR</span><p>Tu operación, conectada.</p></div><span className="admin-avatar" aria-hidden="true">VT</span></div>
          <div className="admin-modules"><div><Icon name="bag" size={18}/><span>Pedidos</span><strong>Organizá tu atención</strong></div><div><Icon name="store" size={18}/><span>Punto de venta</span><strong>Administrá tu negocio</strong></div></div>
          <div className="admin-table-title"><strong>Pedidos del local</strong><span className="example-tag">EJEMPLO</span></div>
          <table className="admin-table"><thead><tr><th>Pedido</th><th>Origen</th><th>Estado</th></tr></thead><tbody><tr><td>#024</td><td>Autoservicio</td><td><span className="status status-orange">En preparación</span></td></tr><tr><td>#023</td><td>Autoservicio</td><td><span className="status status-green">Confirmado</span></td></tr><tr><td>#022</td><td>Autoservicio</td><td><span className="status">Entregado</span></td></tr></tbody></table>
          <div className="admin-bottom"><span className="status-dot"/>Un panel web para tu punto de venta</div>
        </div>
      </div>
    </div>
    <figcaption>Vista conceptual. Las herramientas se definen según tu proyecto.</figcaption>
  </figure>;
}
