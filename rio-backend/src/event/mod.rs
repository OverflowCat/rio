pub mod sync;

use crate::clipboard::ClipboardType;
use crate::config::colors::ColorRgb;
use crate::crosswords::grid::Scroll;
use crate::error::RioError;
use std::borrow::Cow;
use std::fmt::Debug;
use std::fmt::Formatter;
use std::sync::Arc;
use teletypewriter::WinsizeBuilder;

#[repr(u8)]
pub enum UpdateOpcode {
    ForceRefresh = 0,
    UpdateGraphicLibrary = 1,
}

impl From<u8> for UpdateOpcode {
    fn from(val: u8) -> UpdateOpcode {
        match val {
            0 => UpdateOpcode::ForceRefresh,
            1 => UpdateOpcode::UpdateGraphicLibrary,

            _ => UpdateOpcode::ForceRefresh,
        }
    }
}

#[derive(Debug)]
pub enum Msg {
    /// Data that should be written to the PTY.
    Input(Cow<'static, [u8]>),

    #[allow(dead_code)]
    Shutdown,

    Resize(WinsizeBuilder),
}

#[derive(Debug, Eq, PartialEq)]
pub enum ClickState {
    None,
    Click,
    DoubleClick,
    TripleClick,
}

#[derive(Clone)]
pub enum RioEvent {
    PowerOn,
    ScheduleDraw(u64),
    Render,
    Paste,
    Copy(String),
    UpdateFontSize(u8),
    Scroll(Scroll),
    ToggleFullScreen,
    Minimize(bool),
    Hide,
    HideOtherApplications,
    UpdateConfig,
    CreateWindow,
    CloseWindow,
    CreateNativeTab(Option<String>),
    CreateConfigEditor,
    SelectNativeTabByIndex(usize),
    SelectNativeTabLast,
    SelectNativeTabNext,
    SelectNativeTabPrev,

    ReportToAssistant(RioError),

    /// Grid has changed possibly requiring a mouse cursor shape change.
    MouseCursorDirty,

    /// Window title change.
    Title(String, String),

    /// Reset to the default window title.
    ResetTitle,

    /// Request to store a text string in the clipboard.
    ClipboardStore(ClipboardType, String),

    /// Request to write the contents of the clipboard to the PTY.
    ///
    /// The attached function is a formatter which will corectly transform the clipboard content
    /// into the expected escape sequence format.
    ClipboardLoad(
        ClipboardType,
        Arc<dyn Fn(&str) -> String + Sync + Send + 'static>,
    ),

    /// Request to write the RGB value of a color to the PTY.
    ///
    /// The attached function is a formatter which will corectly transform the RGB color into the
    /// expected escape sequence format.
    ColorRequest(
        usize,
        Arc<dyn Fn(ColorRgb) -> String + Sync + Send + 'static>,
    ),

    /// Write some text to the PTY.
    PtyWrite(String),

    /// Request to write the text area size.
    TextAreaSizeRequest(Arc<dyn Fn(WinsizeBuilder) -> String + Sync + Send + 'static>),

    /// Cursor blinking state has changed.
    CursorBlinkingChange,

    /// New terminal content available.
    Wakeup,

    /// Terminal bell ring.
    Bell,

    /// Shutdown request.
    Exit,

    /// Leave current terminal.
    CloseTerminal,

    BlinkCursor,

    RequestUpdate(u8),

    // No operation
    Noop,
}

impl Debug for RioEvent {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        match self {
            RioEvent::PowerOn => write!(f, "PowerOn"),
            RioEvent::ClipboardStore(ty, text) => {
                write!(f, "ClipboardStore({ty:?}, {text})")
            }
            RioEvent::ClipboardLoad(ty, _) => write!(f, "ClipboardLoad({ty:?})"),
            RioEvent::TextAreaSizeRequest(_) => write!(f, "TextAreaSizeRequest"),
            RioEvent::ColorRequest(index, _) => write!(f, "ColorRequest({index})"),
            RioEvent::PtyWrite(text) => write!(f, "PtyWrite({text})"),
            RioEvent::Title(title, subtitle) => write!(f, "Title({title}, {subtitle})"),
            RioEvent::Minimize(cond) => write!(f, "Minimize({cond})"),
            RioEvent::Hide => write!(f, "Hide)"),
            RioEvent::HideOtherApplications => write!(f, "HideOtherApplications)"),
            RioEvent::CursorBlinkingChange => write!(f, "CursorBlinkingChange"),
            RioEvent::MouseCursorDirty => write!(f, "MouseCursorDirty"),
            RioEvent::ResetTitle => write!(f, "ResetTitle"),
            RioEvent::Wakeup => write!(f, "Wakeup"),
            RioEvent::ScheduleDraw(millis) => write!(f, "ScheduleDraw({millis})"),
            RioEvent::Render => write!(f, "Render"),
            RioEvent::Scroll(scroll) => write!(f, "Scroll {scroll:?}"),
            RioEvent::Bell => write!(f, "Bell"),
            RioEvent::Exit => write!(f, "Exit"),
            RioEvent::CloseTerminal => write!(f, "CloseTerminal"),
            RioEvent::CreateWindow => write!(f, "CreateWindow"),
            RioEvent::CloseWindow => write!(f, "CloseWindow"),
            RioEvent::CreateNativeTab(_) => write!(f, "CreateNativeTab"),
            RioEvent::SelectNativeTabByIndex(tab_index) => {
                write!(f, "SelectNativeTabByIndex({tab_index})")
            }
            RioEvent::SelectNativeTabLast => write!(f, "SelectNativeTabLast"),
            RioEvent::SelectNativeTabNext => write!(f, "SelectNativeTabNext"),
            RioEvent::SelectNativeTabPrev => write!(f, "SelectNativeTabPrev"),
            RioEvent::CreateConfigEditor => write!(f, "CreateConfigEditor"),
            RioEvent::UpdateConfig => write!(f, "ReloadConfiguration"),
            RioEvent::ReportToAssistant(error_report) => {
                write!(f, "ReportToAssistant({})", error_report.report)
            }
            RioEvent::ToggleFullScreen => write!(f, "FullScreen"),
            RioEvent::BlinkCursor => write!(f, "BlinkCursor"),
            RioEvent::Noop => write!(f, "Noop"),
            RioEvent::Copy(_) => write!(f, "Copy"),
            RioEvent::Paste => write!(f, "Paste"),
            RioEvent::UpdateFontSize(action) => write!(f, "UpdateFontSize({action:?})"),
            RioEvent::RequestUpdate(opcode) => write!(f, "RequestUpdate({opcode})"),
        }
    }
}

#[derive(Debug, Clone)]
pub struct EventPayload {
    /// Event payload.
    pub payload: RioEvent,
    pub window_id: u8,
}

impl EventPayload {
    pub fn new(payload: RioEvent, window_id: u8) -> Self {
        Self { payload, window_id }
    }
}

pub trait OnResize {
    fn on_resize(&mut self, window_size: WinsizeBuilder);
}