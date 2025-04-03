import './input.css'
type InputType = "text" | "hidden" | "number" | "file"

interface InputProps {
    value?: string;
    label: string;
    defaultValue?: string;
    required?: boolean
    name?: string
    placeholder?: string;
    type: InputType
    onInvalid?: () => void
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onClick?: () => void
}


export default function Input({
    value,
    label,
    defaultValue,
    required,
    name,
    type,
    placeholder,
    onInvalid,
    onChange,
    onClick }: InputProps) {

    return (
        <div className="inputWrapper">
            <label htmlFor={label}>
                <input
                    defaultValue={defaultValue}
                    required={required}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onInvalid={onInvalid}
                    onChange={onChange}
                    onClick={onClick} />
            </label>
        </div>
    )
}