import { useId } from "react";

function TextAreaField({
  label = "",
  onChange,
  onClick,
  defaultValue = "",
  autoComplete,
  value,
  placeholder = "",
  disabled = false,
  required = false,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  readOnly = false,
  rows = 1,
  cols = 30,
  className = "",
  style = {},
  id = "",
  name = "",
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onKeyPress,
  onMouseDown,
  onMouseUp,
}: {
  label?: string;
  type?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  readOnly?: boolean;
  rows?: number;
  cols?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  name?: string;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onChangeCapture?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlurCapture?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onClickCapture?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseDownCapture?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  onMouseUpCapture?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}) {
  const passwordHintId = useId();
  return (
    <>
      <label>
        <span>{label}</span>
        <textarea
          rows={rows}
          cols={cols}
          aria-label={label}
          onChange={(event) =>
            onChange &&
            onChange(event as React.ChangeEvent<HTMLTextAreaElement>)
          }
          onClick={(event) =>
            onClick && onClick(event as React.MouseEvent<HTMLTextAreaElement>)
          }
          onBlur={(event) =>
            onBlur && onBlur(event as React.FocusEvent<HTMLTextAreaElement>)
          }
          onFocus={(event) =>
            onFocus && onFocus(event as React.FocusEvent<HTMLTextAreaElement>)
          }
          onAbort={(event) =>
            console.log("Abort event:", event as React.SyntheticEvent)
          }
          onKeyDown={(event) =>
            onKeyDown &&
            onKeyDown(event as React.KeyboardEvent<HTMLTextAreaElement>)
          }
          onKeyUp={(event) =>
            onKeyUp &&
            onKeyUp(event as React.KeyboardEvent<HTMLTextAreaElement>)
          }
          onKeyPress={(event) =>
            onKeyPress &&
            onKeyPress(event as React.KeyboardEvent<HTMLTextAreaElement>)
          }
          onMouseDown={(event) =>
            onMouseDown &&
            onMouseDown(event as React.MouseEvent<HTMLTextAreaElement>)
          }
          onMouseUp={(event) =>
            onMouseUp &&
            onMouseUp(event as React.MouseEvent<HTMLTextAreaElement>)
          }
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoFocus={autoFocus}
          className={className}
          style={style}
          id={id}
          name={name}
          value={value}
          aria-describedby={passwordHintId}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
        />
      </label>
    </>
  );
}
export default TextAreaField;
