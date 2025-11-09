import { createContext, useContext, useMemo, useReducer, useState, createElement, useEffect } from "react"
import { applyDelta, ReflexEvent, hydrateClientStorage, useEventLoop, refs } from "$/utils/state"
import { jsx } from "@emotion/react";

export const initialState = {"reflex___state____state": {"is_hydrated_rx_state_": false, "nombre_rx_state_": "", "router_rx_state_": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "cookie": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": "", "raw_headers": {}}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}, "url": "", "route_id": ""}}, "reflex___state____state.link_bio___link_bio____state": {}, "reflex___state____state.link_bio___views___products___products____cart_state": {"billing_same_rx_state_": true, "buyer_apellido_rx_state_": "", "buyer_barrio_rx_state_": "", "buyer_calle_rx_state_": "", "buyer_ciudad_rx_state_": "", "buyer_departamento_rx_state_": "", "buyer_dni_rx_state_": "", "buyer_email_rx_state_": "", "buyer_nombre_rx_state_": "", "buyer_numero_rx_state_": "", "buyer_postal_rx_state_": "", "buyer_telefono_rx_state_": "", "card_cvc_rx_state_": "", "card_expiry_rx_state_": "", "card_holder_rx_state_": "", "card_number_rx_state_": "", "cart_items_rx_state_": [], "formatted_cart_items_rx_state_": [], "formatted_selected_price_rx_state_": "$0", "quantity_rx_state_": 0, "selected_image_rx_state_": "", "selected_price_rx_state_": 0.0, "selected_product_rx_state_": "", "selected_size_rx_state_": "", "show_cart_drawer_rx_state_": false, "show_modal_rx_state_": false, "show_selected_panel_mobile_rx_state_": true, "total_items_rx_state_": 0, "total_text_rx_state_": "Total: $0", "wants_newsletter_rx_state_": false}, "reflex___state____state.link_bio___views___products___products____cart_state.link_bio___views___products___detalle_page____detalle_page_state": {"normalized_product_name_rx_state_": "", "product_details_rx_state_": null, "show_success_rx_state_": false}, "reflex___state____state.reflex___state____frontend_event_exception_state": {}, "reflex___state____state.reflex___state____on_load_internal_state": {}, "reflex___state____state.reflex___state____update_vars_internal_state": {}}

export const defaultColorMode = "system"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {reflex___state____state: createContext(null),reflex___state____state__link_bio___link_bio____state: createContext(null),reflex___state____state__link_bio___views___products___products____cart_state: createContext(null),reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state: createContext(null),reflex___state____state__reflex___state____frontend_event_exception_state: createContext(null),reflex___state____state__reflex___state____on_load_internal_state: createContext(null),reflex___state____state__reflex___state____update_vars_internal_state: createContext(null),};
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}, "session_storage": {}}


export const state_name = "reflex___state____state"

export const exception_state_name = "reflex___state____state.reflex___state____frontend_event_exception_state"

// These events are triggered on initial load and each page navigation.
export const onLoadInternalEvent = () => {
    const internal_events = [];

    // Get tracked cookie and local storage vars to send to the backend.
    const client_storage_vars = hydrateClientStorage(clientStorage);
    // But only send the vars if any are actually set in the browser.
    if (client_storage_vars && Object.keys(client_storage_vars).length !== 0) {
        internal_events.push(
            ReflexEvent(
                'reflex___state____state.reflex___state____update_vars_internal_state.update_vars_internal',
                {vars: client_storage_vars},
            ),
        );
    }

    // `on_load_internal` triggers the correct on_load event(s) for the current page.
    // If the page does not define any on_load event, this will just set `is_hydrated = true`.
    internal_events.push(ReflexEvent('reflex___state____state.reflex___state____on_load_internal_state.on_load_internal'));

    return internal_events;
}

// The following events are sent when the websocket connects or reconnects.
export const initialEvents = () => [
    ReflexEvent('reflex___state____state.hydrate'),
    ...onLoadInternalEvent()
]
    

export const isDevMode = true;

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return createElement(
    UploadFilesContext.Provider,
    { value: [filesById, setFilesById] },
    children
  );
}

export function ClientSide(component) {
  return ({ children, ...props }) => {
    const [Component, setComponent] = useState(null);
    useEffect(() => {
      setComponent(component);
    }, []);
    return Component ? jsx(Component, props, children) : null;
  };
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectErrors] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return createElement(
    EventLoopContext.Provider,
    { value: [addEvents, connectErrors] },
    children
  );
}

export function StateProvider({ children }) {
  const [reflex___state____state, dispatch_reflex___state____state] = useReducer(applyDelta, initialState["reflex___state____state"])
const [reflex___state____state__link_bio___link_bio____state, dispatch_reflex___state____state__link_bio___link_bio____state] = useReducer(applyDelta, initialState["reflex___state____state.link_bio___link_bio____state"])
const [reflex___state____state__link_bio___views___products___products____cart_state, dispatch_reflex___state____state__link_bio___views___products___products____cart_state] = useReducer(applyDelta, initialState["reflex___state____state.link_bio___views___products___products____cart_state"])
const [reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state, dispatch_reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state] = useReducer(applyDelta, initialState["reflex___state____state.link_bio___views___products___products____cart_state.link_bio___views___products___detalle_page____detalle_page_state"])
const [reflex___state____state__reflex___state____frontend_event_exception_state, dispatch_reflex___state____state__reflex___state____frontend_event_exception_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____frontend_event_exception_state"])
const [reflex___state____state__reflex___state____on_load_internal_state, dispatch_reflex___state____state__reflex___state____on_load_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____on_load_internal_state"])
const [reflex___state____state__reflex___state____update_vars_internal_state, dispatch_reflex___state____state__reflex___state____update_vars_internal_state] = useReducer(applyDelta, initialState["reflex___state____state.reflex___state____update_vars_internal_state"])
  const dispatchers = useMemo(() => {
    return {
      "reflex___state____state": dispatch_reflex___state____state,
"reflex___state____state.link_bio___link_bio____state": dispatch_reflex___state____state__link_bio___link_bio____state,
"reflex___state____state.link_bio___views___products___products____cart_state": dispatch_reflex___state____state__link_bio___views___products___products____cart_state,
"reflex___state____state.link_bio___views___products___products____cart_state.link_bio___views___products___detalle_page____detalle_page_state": dispatch_reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state,
"reflex___state____state.reflex___state____frontend_event_exception_state": dispatch_reflex___state____state__reflex___state____frontend_event_exception_state,
"reflex___state____state.reflex___state____on_load_internal_state": dispatch_reflex___state____state__reflex___state____on_load_internal_state,
"reflex___state____state.reflex___state____update_vars_internal_state": dispatch_reflex___state____state__reflex___state____update_vars_internal_state,
    }
  }, [])

  return (
    createElement(StateContexts.reflex___state____state,{value: reflex___state____state},
createElement(StateContexts.reflex___state____state__link_bio___link_bio____state,{value: reflex___state____state__link_bio___link_bio____state},
createElement(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state,{value: reflex___state____state__link_bio___views___products___products____cart_state},
createElement(StateContexts.reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state,{value: reflex___state____state__link_bio___views___products___products____cart_state__link_bio___views___products___detalle_page____detalle_page_state},
createElement(StateContexts.reflex___state____state__reflex___state____frontend_event_exception_state,{value: reflex___state____state__reflex___state____frontend_event_exception_state},
createElement(StateContexts.reflex___state____state__reflex___state____on_load_internal_state,{value: reflex___state____state__reflex___state____on_load_internal_state},
createElement(StateContexts.reflex___state____state__reflex___state____update_vars_internal_state,{value: reflex___state____state__reflex___state____update_vars_internal_state},
    createElement(DispatchContext, {value: dispatchers}, children)
    )))))))
  )
}