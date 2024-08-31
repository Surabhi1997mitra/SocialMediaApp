'use client';

import { 
    Input,
    Button,
    Textarea,
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@nextui-org/react"
import { useFormState } from "react-dom"

import * as actions from '@/actions'
import FormButton from "../common/form-button";

export default function TopicCreateForm() {
    const [formState, action] = useFormState(actions.createTopic, { errors: {} })

    return (
        <Popover placement="left">
            <PopoverTrigger>
                <Button color="primary">Create a Topic</Button>
            </PopoverTrigger>
            <PopoverContent>W
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Topic</h3>
                        <Input 
                            name="name" 
                            placeholder="Name" 
                            labelPlacement="outside" 
                            label="Name"
                            isInvalid={!!formState.errors.name}
                            errorMessage={formState.errors.name?.join(', ')}
                        />
                        <Textarea 
                            name="description" 
                            placeholder="Description..." 
                            labelPlacement="outside" 
                            label="Description"
                            isInvalid={!!formState.errors.description}
                            errorMessage={formState.errors.description?.join(', ')}
                        />

                        {formState.errors._form 
                            ? <div className="p-2 bg-red-200 border border-red-400 rounded">{formState.errors._form?.join(', ')}</div> 
                            : null
                        }

                        <FormButton>Create</FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}