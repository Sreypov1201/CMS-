<?php

namespace App\Http\Resources\Children;

use Illuminate\Http\Resources\Json\ResourceCollection;

class EmployeeChildrenResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'data' => $this->collection->transform(function($children){
                return[
                    'PKID' => $children->PKID,
                    'Employee_PKID' => $children->Employee_PKID,
                    'FullName' => $children->FullName,
                    'Gender' => $children->Gender,
                    'DateOfBirth' => $children->DateOfBirth,
                    'Remark' => $children->Remark,
                ];
            })
        ];
    }
}
