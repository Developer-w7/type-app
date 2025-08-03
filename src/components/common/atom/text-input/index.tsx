import { useId } from "react";

function TextField({
  label = "",
  type = "text",
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
  onChange?: (value: string) => void;
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
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChangeCapture?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusCapture?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlurCapture?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClickCapture?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseDownCapture?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onMouseUpCapture?: (event: React.MouseEvent<HTMLInputElement>) => void;
}) {
  const passwordHintId = useId();
  return (
    <>
      <label>
        <span>{label}</span>
        <input
          onChange={(event) =>
            onChange && onChange((event.target as HTMLInputElement).value)
          }
          onClick={(event) =>
            onClick && onClick(event as React.MouseEvent<HTMLInputElement>)
          }
          onBlur={(event) =>
            onBlur && onBlur(event as React.FocusEvent<HTMLInputElement>)
          }
          onFocus={(event) =>
            onFocus && onFocus(event as React.FocusEvent<HTMLInputElement>)
          }
          onAbort={(event) =>
            console.log("Abort event:", event as React.SyntheticEvent)
          }
          onKeyDown={(event) =>
            onKeyDown &&
            onKeyDown(event as React.KeyboardEvent<HTMLInputElement>)
          }
          onKeyUp={(event) =>
            onKeyUp && onKeyUp(event as React.KeyboardEvent<HTMLInputElement>)
          }
          onKeyPress={(event) =>
            onKeyPress &&
            onKeyPress(event as React.KeyboardEvent<HTMLInputElement>)
          }
          onMouseDown={(event) =>
            onMouseDown &&
            onMouseDown(event as React.MouseEvent<HTMLInputElement>)
          }
          onMouseUp={(event) =>
            onMouseUp && onMouseUp(event as React.MouseEvent<HTMLInputElement>)
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
          type={type}
          aria-describedby={passwordHintId}
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          readOnly={readOnly}
        />
      </label>
      {type && type === "password" && (
        <p id={passwordHintId}>
          The password should contain at least 18 characters
        </p>
      )}
    </>
  );
}
export default TextField;
