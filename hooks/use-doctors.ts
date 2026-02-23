'use client';

import { createDoctor, getAvailableDoctors, getDoctors, updateDoctor } from '@/lib/actions/doctor';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useGetDoctors() {
    const result = useQuery({
        queryKey: ['getDoctors'],
        queryFn: getDoctors,
    });
    return result;
}

export function useCreateDoctor() {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: createDoctor,
        onSuccess: () => {
            //refresh data
            queryClient.invalidateQueries({ queryKey: ['getDoctors'] });
        },
        onError: () => console.log('Error creating doctor'),
    });
    return result;
}

export function useUpdateDoctor() {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn: updateDoctor,
        onSuccess: () => {
            //refresh data
            queryClient.invalidateQueries({ queryKey: ['getDoctors'] });
        },
        onError: () => console.log('Error updating doctor'),
    });
    return result;
}

export function useGetAvailableDoctors() {
    const result = useQuery({
        queryKey: ['getAvailableDoctors'],
        queryFn: getAvailableDoctors,
    });
    return result;
}
